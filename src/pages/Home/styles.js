import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #ffff;
    border: none;
    border-radius: 8px;
    height: 3.125rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    outline: 2px solid #ffff;

    &::placeholder {
      color: #bcbcbc;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  strong {
    color: #222;
    font-size: 1.5rem;
  }

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #ffff;
    }
  }
`;

/* prettier-ignore */
export const ListHeader = styled.header`
  margin-top: 1.5rem;

  margin-bottom: 1rem;

  img {
    transform: ${({ $orderBy }) =>
    $orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};

    transition: transform 0.2s ease-in;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.875rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    small {
      background: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      text-transform: uppercase;
      padding: 4px;
      border-radius: 4px;
    }

    span {
      display: block;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: start;

    button {
      background: transparent;
      border: none;
      margin-left: 0.75rem;
    }
  }
`;
