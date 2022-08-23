import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .radio {
    line-height: 0;

    &.s {
      .icon {
        width: 16px;
        height: 16px;
      }

      .label {
        line-height: 16px;
      }
    }

    &.m {
      .icon {
        width: 20px;
        height: 20px;
      }

      .label {
        line-height: 20px;
      }
    }

    label {
      display: inline-grid;
      grid-gap: 0px 8px;
      align-items: start;
      grid-template-rows: 1fr auto;
      grid-template-columns: auto auto;
      align-items: center;

      .label {
        grid-row: 1;
        grid-column: 2;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        color: ${theme.color.ink[500]};
        ${theme.typo.T14_R}
      }

      .desc {
        grid-row: 2;
        grid-column: 2;
        margin-top: 4px;
        cursor: pointer;
        transition: color ${theme.animSpeed.fast};
        color: ${theme.color.ink[400]};
        ${theme.typo.T12_R}
      }

      .icon {
        grid-column: 1;
        cursor: pointer;
        grid-row: span 2;
        position: relative;
        border-radius: 30px;
        background-color: white;
        border: 1px solid ${theme.color.ink[300]};
        transition-property: background-color, border-color;
        transition-duration: ${theme.animSpeed.fast};

        &::before {
          opacity: 0;
          content: '';
          width: calc(50% + 1px);
          height: calc(50% + 1px);
          transition: opacity ${theme.animSpeed.fast};
          background-color: ${theme.color.primary[500]};
          transform: translate(-50%, -50%);
          border-radius: 20px;
          position: absolute;
          left: 50%;
          top: 50%;
        }
      }

      input {
        display: none;

        &:checked + .icon {
          border-color: ${theme.color.primary[500]};

          &::before {
            opacity: 1;
          }
        }

        &:disabled {
          + .icon {
            cursor: not-allowed;

            & + .label {
              cursor: not-allowed;
              color: ${theme.color.ink[300]};

              & + .desc {
                cursor: not-allowed;
                color: ${theme.color.ink[300]};
              }
            }
          }

          &:not(:checked) + .icon {
            border-color: ${theme.color.ink[200]};
          }

          &:checked + .icon {
            border-color: ${theme.color.ink[300]};

            &::before {
              background-color: ${theme.color.ink[300]};
            }
          }
        }
      }

      &:hover input:not(:disabled) {
        + .icon {
          border-color: ${theme.color.primary[400]};
          background-color: ${theme.color.primary[100]};
        }

        &:checked + .icon {
          border-color: ${theme.color.primary[600]};

          &::before {
            background-color: ${theme.color.primary[600]};
          }
        }
      }
    }
  }
`;
