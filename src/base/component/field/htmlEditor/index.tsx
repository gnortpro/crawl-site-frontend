/* eslint-disable global-require */

/* eslint-disable @typescript-eslint/no-var-requires */
import createLinkPlugin from '@draft-js-plugins/anchor';
import { BoldButton, ItalicButton, UnderlineButton } from '@draft-js-plugins/buttons';
import Editor from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { FC, useEffect, useRef, useState } from 'react';

import { Tooltip } from 'component/tooltip';
import { ContentBlock, ContentState, convertToRaw, EditorState, Entity, RichUtils } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import useTranslation from 'next-translate/useTranslation';

export interface IMediaProps {
  block: ContentBlock;
}

export interface IHTMLEditorProps {
  onChange: (str: string) => void;
  value: string;
  placeholder?: string;
}

const linkPlugin = createLinkPlugin({ linkTarget: '_blank' });
const toolbarPlugin = createToolbarPlugin();

const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;

const { Toolbar } = toolbarPlugin;
const { LinkButton } = linkPlugin;

const plugins = [toolbarPlugin, linkPlugin];

export const HTMLEditor: FC<IHTMLEditorProps> = ({ placeholder, value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const { t: translate } = useTranslation('builder');

  const blocksFromHtml = htmlToDraft(value);
  const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
  const newEditorState = EditorState.createWithContent(contentState);

  const [editorState, setEditorState] = useState(newEditorState);

  const [changes, setChanges] = useState(0);

  useEffect(() => {
    setChanges(changes + 1);
    const blocksFromHtml = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  }, [value]);

  const handleFocus = () => {
    if (editorRef.current) editorRef.current.focus();
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);

    return onChange(
      draftToHtml(
        convertToRaw(editorState.getCurrentContent()),
        { separator: ' ', trigger: '#' },
        false,
        (entity, text) => {
          const { data } = entity;
          const entityType = entity.type.toLowerCase();

          if (entityType === 'link') {
            return `<a href=${data.url} target="_blank" rel="noreferrer">${text}</a>`;
          }
        }
      )
    );
  };

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <>
      <div onClick={handleFocus} className="dark:text-slate-400 border">
        <div className="p-2 bg-white italic text-sm">
          <Editor
            ref={editorRef as any}
            spellCheck
            editorState={editorState}
            onChange={onEditorStateChange}
            plugins={plugins}
            placeholder={placeholder}
            handleKeyCommand={handleKeyCommand}
          />
        </div>
        <Toolbar>
          {externalProps => (
            <div className="flex p-2 border-t dark:border-slate-800 editor-buttons">
              <div className="flex-1 flex space-x-3">
                <Tooltip placement="top" content={translate('bold')}>
                  <BoldButton {...externalProps} theme={{ button: 'fill-gray-400', active: 'fill-primary' }} />
                </Tooltip>
                <Tooltip placement="top" content={translate('italic')}>
                  <ItalicButton {...externalProps} theme={{ button: 'fill-gray-400', active: 'fill-primary' }} />
                </Tooltip>
                <Tooltip placement="top" content={translate('underline')}>
                  <UnderlineButton {...externalProps} theme={{ button: 'fill-gray-400', active: 'fill-primary' }} />
                </Tooltip>
                <Tooltip placement="top" content={translate('insertLink')}>
                  <LinkButton {...externalProps} theme={{ button: 'fill-gray-400', active: 'fill-primary' }} />
                </Tooltip>
              </div>
            </div>
          )}
        </Toolbar>
      </div>
    </>
  );
};
