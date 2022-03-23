import styled from '@emotion/styled';

export const Button = styled.button`
  height: 40px;
  width: 100px;
  margin: 10px;
  border-color: transparent;
  border-radius: 10px;
  &:hover {
    border: 3px solid blue;
  }

  &[name='good'] {
    background-color: green;
  }
  &[name='neutral'] {
    background-color: yellow;
  }
  &[name='bad'] {
    background-color: red;
  }
`;

export const ControlsSection = styled.section`
  margin-bottom: 30px;
`;
