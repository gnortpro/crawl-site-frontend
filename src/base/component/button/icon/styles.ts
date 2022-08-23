import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition-property: background-color, color;
    transition-duration: ${theme.animSpeed.extraFast};
    border-radius: 4px;
    user-select: none;
    border: 1xp solid ${theme.color.ink[200]};

    &:not(:disabled) {
      &:hover,
      &:focus {
        background-color: ${theme.color.ink[200]};
      }
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    &.loading {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;
