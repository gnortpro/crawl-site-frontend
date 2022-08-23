import { useEffect } from 'react';

interface Params {
  key: string;
  callback: (...args: any[]) => void;
}

export const useKeyboardEvent = (
  keyEvent: 'keyup' | 'keydown' | 'keypress',
  active: boolean,
  actions: Params[]
): void => {
  useEffect(() => {
    const handleKeyup = (event: KeyboardEvent) => {
      if (!active) return;

      actions.forEach(({ key, callback }) => {
        if (event.key === key) callback(event);
      });
    };

    if (active) {
      document.addEventListener(keyEvent, handleKeyup);
    } else {
      document.removeEventListener(keyEvent, handleKeyup);
    }

    return () => document.removeEventListener(keyEvent, handleKeyup);
  }, [active, keyEvent, actions]);
};
