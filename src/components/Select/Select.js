import { styled } from 'styled-components';

export default styled.select`
  width: 100%;
  background: #ffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #ffff;
  outline: 2px solid #ffff;
  border-radius: 4px;
  height: 3.2rem;
  padding: 0 1rem;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  transition: all 0.2s ease-in;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
