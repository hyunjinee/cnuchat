import styled from 'styled-components';
import { media } from 'styles/theme';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  margin-top: -12rem;
  display: flex;
  flex-direction: column;
  width: 33.6rem;

  img {
    cursor: pointer;
  }
`;

export const NickNameInput = styled.input`
  margin-top: 3rem;
  border: none;
  border-radius: 10px;
  border-color: rgba(221, 221, 221, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 4.9rem;
  width: 33.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.5rem;

  ${media.mobile} {
  }
`;

export const TalkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const GroupTalk = styled.button`
  ${flexCenter};
  font-size: 1.6rem;
  font-weight: 600;
  width: 15.2rem;
  height: 4.6rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  cursor: pointer;

  color: '#121212';
  background-color: ${({ theme }) => theme.color.blue};
`;

export const PersonalTalk = styled.button`
  ${flexCenter};
  font-size: 1.6rem;
  font-weight: 600;
  width: 15.2rem;
  height: 4.6rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  cursor: pointer;

  color: '#121212';
  background-color: ${({ theme }) => theme.color.red};
`;
