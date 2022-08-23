import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .textField {
    width: 100%;
    background-color: white;
    /* border: 1px solid ${theme.color.border}; */
    transition: border-color ${theme.animSpeed.fast};
    border-radius: 4px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus-within {
      border-color: ${theme.color.primary[500]};
    }

    &:hover,
    &:focus-within {
      .icon.clear {
        opacity: 1;
      }
    }

    &.disabled {
      background-color: ${theme.color.ink[200]};
    }

    &.error {
      border-color: ${theme.color.red[500]};

      input {
        caret-color: ${theme.color.red[500]};
      }
    }

    .icon {
      flex: 0 0 auto;

      &.clear {
        opacity: 0;
        cursor: pointer;
        transition-property: opacity, color;
        transition-duration: ${theme.animSpeed.fast};

        &:hover {
          color: ${theme.color.ink[400]};
        }
      }

      &.left {
        line-height: 0;
        margin-left: 8px;
        color: ${theme.color.ink[300]};
      }

      &.right {
        line-height: 0;
        font-size: 13px;
        padding: 5px;
        color: ${theme.color.ink[300]};
      }
    }

    input {
      width: 100%;
      flex: 1 1 100%;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      background-color: white;
      caret-color: ${theme.color.primary[500]};
      color: ${theme.color.ink[500]};
      ${theme.typo.T14_R}
      line-height: normal;

      &:disabled {
        cursor: not-allowed;
        color: ${theme.color.ink[400]};
        background-color: ${theme.color.ink[200]};
      }

      &:focus {
        border: none;
        box-shadow: none;
      }

      ::placeholder {
        color: ${theme.color.ink[300]};
      }
    }
  }
`;
