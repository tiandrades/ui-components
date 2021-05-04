import styled, { keyframes } from 'styled-components';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const Content = styled.div`
  display: inline-block;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-bottom: 2px;
  border-left: 2px;
  border-bottom-style: solid;
  border-left-style: solid;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 100%;
  animation: ${spin} 0.5s linear infinite;
  width: 30px;
  height: 30px;
`;
