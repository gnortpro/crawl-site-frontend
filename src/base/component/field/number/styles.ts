import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .numberField {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${theme.color.border};
    transition: border-color ${theme.animSpeed.fast};
    background-color: white;
    border-radius: 4px;
    position: relative;
    user-select: none;

    &:not(.disabled) {
      &:hover,
      &:focus,
      &:focus-within {
        .numberSpinner.hover {
          display: flex;
        }
      }
    }

    &:not(.error) {
      &:focus,
      &:focus-within {
        border-color: ${theme.color.primary[500]};

        .numberSpinner {
          border-left-color: ${theme.color.primary[500]};

          &::after {
            background-color: ${theme.color.primary[500]};
          }
        }
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

      .numberSpinner {
        border-left-color: ${theme.color.red[500]};

        &::after {
          background-color: ${theme.color.red[500]};
        }
      }
    }

    .icon {
      flex: 0 0 auto;

      &.left {
        margin-left: 8px;
        color: ${theme.color.ink[400]};
      }

      &.right {
        cursor: pointer;
        margin-right: 8px;
        color: ${theme.color.ink[300]};
      }
    }

    &.hasSpinner input {
      padding-right: 32px;
    }

    input {
      flex: 1;
      width: 0;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      caret-color: ${theme.color.primary[500]};
      color: ${theme.color.ink[500]};
      -moz-appearance: textfield; /* fix on Firefox */
      line-height: normal;
      ${theme.typo.T14_R}

      &:disabled {
        cursor: not-allowed;
        color: ${theme.color.ink[400]};
      }

      &::-webkit-inner-spin-button {
        display: none;
      }

      ::placeholder {
        color: ${theme.color.ink[300]};
      }
    }

    .numberSpinner {
      width: 24px;
      height: 100%;
      display: none;
      flex: 0 0 24px;
      line-height: 0;
      position: relative;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid ${theme.color.border};
      transition: border-left-color ${theme.animSpeed.fast};

      &.on {
        display: flex;
      }

      &.off {
        display: none;
      }

      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${theme.color.border};
        transition: background-color ${theme.animSpeed.fast};
        top: calc(50% - 0.5px);
        position: absolute;
        right: 0;
        left: 0;
      }

      > div {
        transition: background-color ${theme.animSpeed.fast};
        background-color: ${theme.color.backgroundLight};
        position: relative;
        cursor: pointer;
        height: 100%;
        width: 100%;

        &:hover,
        &:focus,
        &:focus-within {
          background-color: ${theme.color.ink[200]};
        }

        &:first-child {
          border-top-right-radius: 3px;
        }

        &:last-child {
          border-bottom-right-radius: 3px;
        }

        :global(svg) {
          width: 16px;
          height: 16px;
          transform: translate(-50%, -50%);
          position: absolute;
          left: 50%;
          top: 50%;
        }
      }
    }
  }
`;
