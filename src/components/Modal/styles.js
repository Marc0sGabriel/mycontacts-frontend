import { styled } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
`;

/* prettier-ignore */
export const Container = styled.div`
  width: 80%;
  max-width: 28.125rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #e1e1e1;
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.6rem;
    color: ${({ theme, danger }) => danger ? theme.colors.danger.main : theme.colors.dark[900]};
  }

  p {
    margin-top: 0.875rem;
  }
`;

/* prettier-ignore */
export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  justify-content: end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
