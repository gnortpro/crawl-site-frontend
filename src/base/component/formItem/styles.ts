import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .formItem {
    position: relative;

    &.gutter {
      &--xs {
        margin-top: 8px;
      }

      &--s {
        margin-top: 16px;
      }

      &--m {
        margin-top: 20px;
      }

      &--l {
        margin-top: 32px;
      }
    }

    .formLabel {
      display: flex;
      margin-bottom: 6px;
      align-items: center;
      white-space: normal;
      color: ${theme.color.ink[500]};
      ${theme.typo.T14_M}

      .requiredMark {
        margin-left: 2px;
        color: ${theme.color.red[500]};
      }

      :global(.tooltipAnchor) {
        flex: 0 0 auto;
        margin-left: 2px;
        color: ${theme.color.ink[300]};
      }
    }

    .formBody {
      position: relative;
      line-height: 0;

      .formCounter {
        right: 0;
        top: -24px;
        position: absolute;
        color: ${theme.color.ink[300]};
        ${theme.typo.T14_R}

        .count {
          color: ${theme.color.ink[400]};
        }

        .maxCount {
          color: ${theme.color.ink[300]};
        }
      }
    }

    .formHint {
      margin-top: 4px;
      color: ${theme.color.ink[400]};
      ${theme.typo.T12_R}
    }

    .formError {
      /* overflow: hidden; */
      color: ${theme.color.red[500]};
      ${theme.typo.T12_R}

      &-enter {
        height: 0;
        opacity: 0;
        padding-top: 0;
      }

      &-enter-active {
        opacity: 1;
        height: 20px;
        padding-top: 4px;
        transition-property: opacity, height, padding-top;
        transition-duration: ${theme.animSpeed.extraFast};
      }

      &-enter-done {
        opacity: 1;
        height: 20px;
        padding-top: 4px;
      }

      &-exit {
        opacity: 1;
        height: 20px;
        padding-top: 4px;
      }

      &-exit-active {
        height: 0;
        opacity: 0;
        padding-top: 0;
        transition-property: opacity, height, padding-top;
        transition-duration: ${theme.animSpeed.extraFast};
      }

      &-exit-done {
        height: 0;
        opacity: 0;
        padding-top: 0;
      }
    }
  }
`;
