import type { NextPage } from 'next';
import styled from 'styled-components';

import Loading from 'components/common/Loading';
import { useUser } from 'contexts/UserContext';
import ChatLayout from 'components/chat/ChatLayout';
import ChatForm from 'components/chat/ChatForm';
import ChatHeader from 'components/chat/ChatHeader';
import ChatList from 'components/chat/ChatList';
import { Container } from 'styles/utils';

const Group: NextPage = () => {
  const { nickname, setNickname } = useUser();

  console.log(nickname, setNickname, '??');

  return (
    <GroupPageContainer>
      <ChatLayout>
        <ChatHeader />
        <ChatList />
        <ChatForm />
      </ChatLayout>
    </GroupPageContainer>
  );
};

const GroupPageContainer = styled(Container)`
  background: blue;
`;

export default Group;
