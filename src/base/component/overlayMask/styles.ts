import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .overlayMask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition-property: background-color;
    transition-duration: ${theme.animSpeed.normal};

    &.dimming-enter {
      background-color: transparent;
    }

    &.dimming-enter-active {
      background-color: var(--background-dim);
    }

    &.dimming-enter-done {
      background-color: var(--background-dim);
    }

    &.dimming-exit {
      background-color: var(--background-dim);
    }

    &.dimming-exit-active {
      background-color: transparent;
    }

    &.dimming-exit-done {
      background-color: transparent;
    }

    &[data-content-opacity='true'] {
      transition-property: background-color, opacity;

      &.dimming-enter {
        opacity: 0;
      }

      &.dimming-enter-active {
        opacity: 1;
      }

      &.dimming-enter-done {
        opacity: 1;
      }

      &.dimming-exit {
        opacity: 1;
      }

      &.dimming-exit-active {
        opacity: 0;
      }

      &.dimming-exit-done {
        opacity: 0;
      }
    }
  }
`;
