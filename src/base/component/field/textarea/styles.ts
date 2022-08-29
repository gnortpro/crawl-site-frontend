import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
  .textAreaField {
    width: 100%;
    min-height: 32px;
    background-color: white;
    border: 1px solid ${theme.color.border};
    transition: border-color ${theme.animSpeed.fast};
    caret-color: ${theme.color.primary[500]};
    color: ${theme.color.ink[500]};
    vertical-align: top;
    line-height: normal;
    border-radius: 4px;
    resize: vertical;
    padding: 10px 12px;
    ${theme.typo.T14_R}

    ::placeholder {
      color: ${theme.color.ink[300]};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.ink[400]};
    }

    &:focus {
      border-color: ${theme.color.ink[100]};
    }

    &.disabled {
      background-color: ${theme.color.ink[200]};
    }

    &.error {
      caret-color: ${theme.color.red[500]};
      border-color: ${theme.color.red[500]};
    }
  }
`;
