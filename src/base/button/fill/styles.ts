import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .fillButton {
    opacity: 1;
    flex: 0 0 auto;
    padding: 0 16px;
    transition-property: opacity, background-color, color;
    transition-duration: ${theme.animSpeed.fast};
    white-space: nowrap;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    ${theme.typo.T16_M}

    &:hover:not(.disabled):not(.loading) {
      opacity: 0.8;
    }

    &.s {
      height: 32px;
      ${theme.typo.T14_M}
    }

    &.m {
      height: 40px;
      ${theme.typo.T14_M}
    }

    &.l {
      height: 48px;
      ${theme.typo.T16_M}
    }

    &.disabled {
      cursor: not-allowed;
      color: ${theme.color.ink[300]};
      background-color: ${theme.color.ink[100]};
      pointer-events: none;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;

      &.icon-left {
        flex-direction: row;
        flex: 0 0 auto;

        .text {
          margin-left: 8px;
        }
      }

      &.icon-right {
        flex-direction: row-reverse;
        flex: 0 0 auto;

        .text {
          margin-right: 8px;
        }
      }
    }

    &.loading {
      cursor: not-allowed;

      .content .text {
        margin-left: 8px;
      }
    }
  }
`;
