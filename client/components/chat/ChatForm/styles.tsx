import styled from 'styled-components';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  /* background-color: green; */
  height: 5rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const FeatureContainer = styled.div`
  ${flexCenter};
  width: 5rem;
`;

export const MessageInput = styled.input`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  button {
    width: 100%;
    height: 100%;
  }
`;
