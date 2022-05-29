import styled from 'styled-components';

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
`;

export const TalkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const OneVsOneTalk = styled.button`
  width: 15.2rem;
  height: 4.6rem;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
`;

export const GroupTalk = styled.button`
  width: 15.2rem;
  height: 4.6rem;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
`;
