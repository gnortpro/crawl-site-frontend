import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .switch {
    /* Important: To prevent Switch's click area from being stretched out */
    display: inline-block;

    &.s {
      label {
        .slider {
          width: 28px;
          height: 16px;

          &::after {
            width: 12px;
            height: 12px;
          }
        }

        .label {
          ${theme.typo.T14_R}
        }
      }
    }

    &.m {
      label {
        .slider {
          width: 36px;
          height: 20px;

          &::after {
            width: 16px;
            height: 16px;
          }
        }

        .label {
          ${theme.typo.T14_M}
        }
      }
    }

    label {
      display: flex;
      align-items: center;

      input {
        display: none;

        &:focus:not(:disabled) + .slider {
          box-shadow: 0 0 8px ${theme.color.blue[500]}4d;
        }

        &:checked + .slider {
          background-color: ${theme.color.blue[500]};

          &:after {
            transform: translate(100%, -50%);
          }
        }

        &:disabled {
          + .slider {
            background-color: ${theme.color.ink[200]};
            cursor: not-allowed;

            &:after {
              cursor: not-allowed;
              box-shadow: none;
            }

            + .label {
              color: ${theme.color.ink[300]};
              cursor: not-allowed;
            }
          }

          &:checked + .slider {
            background-color: ${theme.color.primary[300]};
          }
        }
      }

      .slider {
        cursor: pointer;
        position: relative;
        border-radius: 50px;
        background-color: ${theme.color.ink[300]};
        transition-duration: ${theme.animSpeed.normal};
        transition-property: background-color box-shadow;

        &:after {
          content: '';
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: white;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
          transition: transform ${theme.animSpeed.normal};
          transform: translate(0%, -50%);
          position: absolute;
          left: 2px;
          top: 50%;
        }
      }

      .label {
        cursor: pointer;
        margin-left: 8px;
        user-select: none;
        color: ${theme.color.ink[500]};
        transition: color ${theme.animSpeed.normal};

        + :global(.tooltipAnchor) {
          margin-left: 4px;
        }
      }
    }
  }
`;
