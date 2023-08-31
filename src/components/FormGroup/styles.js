import { styled } from 'styled-components';

export const Container = styled.div`
  small {
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
    margin-top: 0.8rem;
  }
`;
