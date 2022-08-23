import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .tab {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    padding: 10px 24px;
    max-width: 280px;

    :global(.tabIcon),
    :global(.errorIcon) {
      flex: none;

      + .label {
        margin-left: 8px;
      }
    }

    .label {
      overflow: hidden;
      user-select: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${theme.typo.T14_M}
    }

    .label,
    :global(.tabIcon) {
      transition: color ${theme.animSpeed.fast};
      color: ${theme.color.ink[400]};
    }

    .counter {
      width: auto;
      white-space: nowrap;
      padding: 2px 4px;
      margin-left: 8px;
      user-select: none;
      border-radius: 4px;
      transition-property: color, background-color;
      transition-duration: ${theme.animSpeed.fast};
      background-color: ${theme.color.ink[200]};
      color: ${theme.color.ink[500]};
      ${theme.typo.T12_M}
    }

    &.active:not(.disabled) {
      cursor: default;

      .counter {
        color: ${theme.color.blue[600]};
        background-color: ${theme.color.blue[200]};
      }
    }

    &.disabled {
      cursor: not-allowed;

      .label,
      .counter,
      :global(.tabIcon) {
        color: ${theme.color.ink[300]};
      }
    }

    &.default {
      &:before {
        content: '';
        height: 1px;
        background-color: ${theme.color.border};
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
      }

      &:not(.disabled):after {
        content: '';
        height: 2px;
        transform: translateX(-50%);
        transition: width ${theme.animSpeed.fast};
        background-color: ${theme.color.blue[500]};
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
      }

      &:hover:not(.disabled):not(.active) {
        cursor: pointer;

        .label,
        .counter,
        :global(.tabIcon) {
          color: ${theme.color.ink[500]};
        }
      }

      &.active:not(.disabled) {
        &:after {
          width: 100%;
        }

        .label,
        :global(.tabIcon) {
          color: ${theme.color.primary[500]};
        }
      }
    }

    &.container {
      height: 40px;
      display: flex;
      padding: 0 16px;
      align-items: center;
      border-radius: 4px 4px 0px 0px;
      color: ${theme.color.ink[400]};
      border: 1px solid ${theme.color.border};
      background-color: ${theme.color.ink[100]};
      transition-duration: ${theme.animSpeed.fast};
      transition-property: background-color, border-color;

      &:not(.disabled) {
        cursor: pointer;
      }

      &.disabled {
        background-color: ${theme.color.ink[100]};
      }

      &:hover {
        background-color: ${theme.color.primary[100]};

        .label,
        :global(.tabIcon) {
          color: ${theme.color.ink[500]};
        }
      }

      &.active:not(.disabled) {
        border-bottom-color: white;
        background-color: white;
        cursor: default;

        .label,
        :global(.tabIcon) {
          color: ${theme.color.primary[500]};
        }
      }

      :global(.iconButton) {
        margin-left: 8px;
        margin-right: -8px;
      }
    }
  }
`;
