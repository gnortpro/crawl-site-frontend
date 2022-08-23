import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .checkbox {
    line-height: 0;

    &.s label {
      height: 16px;

      .checkIcon {
        width: 16px;
        height: 16px;
      }
    }

    &.m label {
      height: 20px;

      .checkIcon {
        width: 20px;
        height: 20px;
      }
    }

    label {
      display: inline-flex;
      align-items: center;

      .label {
        cursor: pointer;
        user-select: none;
        padding-left: 8px;
        white-space: nowrap;
        color: ${theme.color.ink[500]};
        ${theme.typo.T14_R}
      }

      .checkIcon {
        cursor: pointer;
        position: relative;
        border-radius: 4px;
        background-color: white;
        border: 1px solid ${theme.color.ink[300]};
        transition-property: background-color, border-color;
        transition-duration: ${theme.animSpeed.fast};

        :global(.icon.checked),
        :global(.icon.indeterminate) {
          display: none;
          transform: translate(-50%, -50%);
          position: absolute;
          left: 50%;
          top: 50%;
        }
      }

      input {
        display: none;

        &:checked + .checkIcon :global(.icon.checked) {
          display: inline-block;
        }

        &:indeterminate + .checkIcon :global(.icon.indeterminate) {
          display: inline-block;
        }

        &:checked + .checkIcon,
        &:indeterminate + .checkIcon {
          border-color: ${theme.color.blue[500]};
          background-color: ${theme.color.blue[500]};
        }

        &:disabled {
          cursor: not-allowed;

          + .checkIcon {
            cursor: not-allowed;

            & + .label {
              cursor: not-allowed;
              color: ${theme.color.ink[300]};
            }
          }

          &:not(:checked) + .checkIcon,
          &:not(:indeterminate) + .checkIcon {
            border-color: ${theme.color.ink[200]};
          }

          &:checked + .checkIcon,
          &:indeterminate + .checkIcon {
            border-color: ${theme.color.ink[300]};
            background-color: ${theme.color.ink[300]};
          }
        }
      }

      &:hover input:not(:disabled) {
        + .checkIcon {
          border-color: ${theme.color.blue[400]};
          background-color: ${theme.color.blue[100]};
        }

        &:checked + .checkIcon,
        &:indeterminate + .checkIcon {
          border-color: ${theme.color.blue[600]};
          background-color: ${theme.color.blue[600]};
        }
      }
    }
  }
`;
