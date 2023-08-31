import { styled } from 'styled-components';

export const Container = styled.header`
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: fit-content;
  }

  span {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  img {
    rotate: -90deg;
    margin-right: 0.8rem;
  }

  h1 {
    font-size: 1.85rem;
  }
`;
