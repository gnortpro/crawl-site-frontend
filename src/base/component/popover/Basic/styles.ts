import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .popoverContent {
    padding: 16px 0;
    max-height: 72vh;

    .popoverHeader {
      width: 100%;
      padding: 0 16px;
      margin-bottom: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${theme.color.ink[500]};
      ${theme.typo.T16_M_20}
    }

    .popoverBody {
      overflow: auto;
      padding: 0 16px;
      max-height: calc(72vh - 116px);
      ${theme.typo.T14_R}
    }

    .popoverFooter {
      width: 100%;
      display: flex;
      padding: 0 16px;
      margin-top: 16px;
      align-items: center;
      justify-content: flex-end;

      :global(button) {
        flex: 1 1 100%;
        width: 100%;
      }

      :global(button + button) {
        margin-left: 12px;
      }
    }
  }
`;
