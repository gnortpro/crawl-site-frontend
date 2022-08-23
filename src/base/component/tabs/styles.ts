import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .tabs {
    height: 40px;
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    box-shadow: inset 0px -1px 0px ${theme.color.border};

    .navButton {
      padding: 4px;
      position: relative;
      background-color: white;
      color: ${theme.color.ink[400]};

      &::before {
        content: '';
        height: 1px;
        background-color: ${theme.color.border};
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
      }
    }

    .scrollContainer {
      height: auto;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      align-items: center;
    }

    &.container {
      .scrollContainer {
        > :global(.tab + .tab) {
          margin-left: 4px;
        }
      }

      .navButton,
      .createButton {
        &::after {
          top: 0;
          z-index: 10;
          content: '';
          height: 100%;
          position: absolute;
          border-style: solid;
          border-color: ${theme.color.border};
          box-shadow: 0px -3px 0px 0px white;
        }
      }

      .navButton {
        &.left::after {
          width: 4px;
          right: -4px;
          border-top-left-radius: 4px;
          border-width: 1px 0px 0px 1px;
        }

        &.right::after {
          width: 4px;
          left: -4px;
          border-top-right-radius: 4px;
          border-width: 1px 1px 0px 0px;
        }
      }

      .createButton {
        flex: none;
        width: 40px;
        height: 40px;
        cursor: pointer;
        margin-left: 4px;
        position: relative;
        border-radius: 4px 4px 0px 0px;
        color: ${theme.color.ink[400]};
        box-shadow: 3px -1px 0px 0px white;
        border: 1px solid ${theme.color.border};
        background-color: ${theme.color.ink[100]};
        transition: background-color ${theme.animSpeed.fast};

        &:hover,
        &:focus,
        &:focus-within {
          color: ${theme.color.primary[500]};
          background-color: ${theme.color.primary[100]};
        }

        &::after {
          top: -1px;
          width: 4px;
          left: -9px;
          height: calc(100% + 2px);
          border-top-right-radius: 4px;
          border-width: 1px 1px 0px 0px;
        }
      }
    }
  }
`;
