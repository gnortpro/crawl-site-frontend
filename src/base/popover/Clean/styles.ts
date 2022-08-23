import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  /* Define opacity animation */
  #popover {
    z-index: 1000;

    &.popover {
      .content {
        min-width: 48px;
        min-height: 48px;
        border-radius: 4px;
        background-color: white;
        box-shadow: ${theme.shadow[8]};
      }

      &.popover-enter .content {
        opacity: 0;
      }

      &.popover-enter-active .content {
        transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* easeOutBack */
        transition-duration: ${theme.animSpeed.normal};
        transition-property: transform, opacity;
        opacity: 1;
      }

      &.popover-enter-done .content {
        opacity: 1;
      }

      &.popover-exit .content {
        opacity: 1;
      }

      &.popover-exit-active .content {
        transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* easeOutBack */
        transition-duration: ${theme.animSpeed.normal};
        transition-property: transform, opacity;
        opacity: 0;
      }

      &.popover-exit-done .content {
        opacity: 0;
      }
    }
  }

  /* Define transform animation */
  #popover {
    &[data-popper-placement^='left'] {
      &.popover-enter .content {
        transform: translate3d(-10px, 0, 0);
      }

      &.popover-enter-active .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-enter-done .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit-active .content {
        transform: translate3d(-10px, 0, 0);
      }

      &.popover-exit-done .content {
        transform: translate3d(-10px, 0, 0);
      }
    }

    &[data-popper-placement^='right'] {
      &.popover-enter .content {
        transform: translate3d(10px, 0, 0);
      }

      &.popover-enter-active .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-enter-done .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit-active .content {
        transform: translate3d(10px, 0, 0);
      }

      &.popover-exit-done .content {
        transform: translate3d(10px, 0, 0);
      }
    }

    &[data-popper-placement^='top'] {
      &.popover-enter .content {
        transform: translate3d(0, -10px, 0);
      }

      &.popover-enter-active .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-enter-done .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit-active .content {
        transform: translate3d(0, -10px, 0);
      }

      &.popover-exit-done .content {
        transform: translate3d(0, -10px, 0);
      }
    }

    &[data-popper-placement^='bottom'] {
      &.popover-enter .content {
        transform: translate3d(0, 10px, 0);
      }

      &.popover-enter-active .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-enter-done .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit .content {
        transform: translate3d(0, 0, 0);
      }

      &.popover-exit-active .content {
        transform: translate3d(0, 10px, 0);
      }

      &.popover-exit-done .content {
        transform: translate3d(0, 10px, 0);
      }
    }
  }

  /* Define the position of the triangle/arrow */
  #popover {
    /* Checkout a simplified version here: https://codepen.io/dshung1997/pen/yLbYeer */
    #arrow {
      position: absolute;
      width: 0;
      height: 0;
      z-index: 1;

      .square {
        position: absolute;

        background-color: transparent;
        box-shadow: none;

        width: 40px;
        height: 40px;

        overflow: hidden;
        pointer-events: none;
        user-select: none;

        &::before {
          content: '';

          position: absolute;

          width: 17px;
          height: 17px;

          background: white;
          box-shadow: ${theme.shadow[8]};
        }
      }
    }

    &[data-popper-placement^='left'] {
      #arrow {
        right: 0;

        .square {
          left: 0;
          top: 50%;
          transform: translate3d(0, -50%, 0);

          &::before {
            top: 50%;
            left: 0;
            border-top-right-radius: 2px;
            transform: translate3d(-50%, -50%, 0) rotate(45deg);
          }
        }
      }
    }

    &[data-popper-placement^='right'] {
      #arrow {
        left: 0;

        .square {
          right: 0;
          top: 50%;
          transform: translate3d(0, -50%, 0);

          &::before {
            top: 50%;
            right: 0;
            border-bottom-left-radius: 2px;
            transform: translate3d(50%, -50%, 0) rotate(45deg);
          }
        }
      }
    }

    &[data-popper-placement^='top'] {
      #arrow {
        bottom: 0;

        .square {
          top: 0;
          left: 50%;

          transform: translate3d(-50%, 0, 0);

          &::before {
            top: 0;
            left: 50%;
            border-bottom-right-radius: 2px;
            transform: translate3d(-50%, -50%, 0) rotate(45deg);
          }
        }
      }
    }

    &[data-popper-placement^='bottom'] {
      #arrow {
        top: 0;

        .square {
          bottom: 0;
          left: 50%;

          transform: translate3d(-50%, 0, 0);

          &::before {
            bottom: 0;
            left: 50%;
            border-top-left-radius: 2px;
            transform: translate3d(-50%, 50%, 0) rotate(45deg);
          }
        }
      }
    }
  }
`;
