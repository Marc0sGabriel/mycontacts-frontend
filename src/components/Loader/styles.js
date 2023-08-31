import { styled } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(246, 245, 252, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #766df4);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: s3 1s infinite linear;
  }
  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
