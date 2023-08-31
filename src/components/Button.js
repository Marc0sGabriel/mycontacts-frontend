import { styled, css } from 'styled-components';

/* prettier-ignore */
export default styled.button`
  margin-top: 1.4rem;
  padding: 0 1rem;
  height: 3.2rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in;


  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  ${({ theme, $danger }) => $danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }

  `}
`;
