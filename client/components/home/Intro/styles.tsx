import styled from 'styled-components';
import { media } from 'styles/theme';
import { flexCenter } from 'styles/utils';

export const Container = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;

  flex-direction: column;
`;

export const Description = styled.span`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const NickNameInput = styled.input`
  margin-top: 3rem;
  border: none;
  border-radius: 10px;
  border-color: rgba(221, 221, 221, 1);
  border: 0.1rem solid rgba(221, 221, 221, 1);
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  height: 4.9rem;
  width: 33.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.5rem;
  margin: 0 auto;

  transition: 0.125s all ease-in;

  &:focus {
    border: 2px solid #2b7cfe;
  }

  ${media.mobile} {
  }
`;

export const NickNameInput2 = styled.input`
  margin-top: 3rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  /* border: 1px solid '#f5f5f5' */
  border-radius: 0.5rem;

  transition: 0.125 all ease-in;
`;

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  width: 35rem;
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
  color: white;
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
  color: white;
  background-color: ${({ theme }) => theme.color.red};
`;
