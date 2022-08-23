import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .colorPickerField {
    display: flex;
    align-items: center;
    color: ${theme.color.ink[500]};
    transition: border-color ${theme.animSpeed.fast};
    border: 1px solid ${theme.color.border};
    background-color: ${theme.color.white};
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;

    &.s {
      height: 32px;
    }

    &.m {
      height: 38px;
    }
    &.l {
      height: 40px;
    }

    &:not(.disabled):hover :global(.clearButton) {
      opacity: 1;
    }

    &.isOpen {
      border-color: ${theme.color.blue[500]};
    }

    &.invalid {
      border-color: ${theme.color.red[500]};
    }

    &.disabled {
      background-color: ${theme.color.ink[200]};
      color: ${theme.color.ink[300]};
      cursor: not-allowed;
    }

    .valueContainer {
      margin: 0 8px;

      .value {
        cursor: text;
        ${theme.typo.T14_R}
      }

      .placeholder {
        ${theme.typo.T14_R}
        color: ${theme.color.ink[300]};
      }
    }

    :global(.clearButton) {
      opacity: 0;
      cursor: pointer;
      margin-left: auto;
      color: ${theme.color.ink[300]};
      transition-property: opacity, color;
      transition-duration: ${theme.animSpeed.fast};

      &:hover {
        color: ${theme.color.ink[400]};
      }
    }
  }
`;
