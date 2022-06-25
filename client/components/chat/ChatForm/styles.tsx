import styled from 'styled-components';

import media from 'styles/media';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  /* background-color: green; */
  height: 6rem;

  ${media.mobile} {
    height: 6.5rem;
  }
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

  font-size: 1.6rem;
  /* height: 10rem; */
  outline: none;
  border: none;

  /* border: 1px solid black;

  border-radius: 5px; */

  padding-left: 1rem;

  ${media.mobile} {
    font-size: 1.6rem;
  }
`;

export const ButtonContainer = styled.div`
  button {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }
`;
