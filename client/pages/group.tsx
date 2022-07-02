import type { NextPage } from 'next';
import styled from 'styled-components';

import Loading from 'components/common/Loading';
import { useUser } from 'contexts/UserContext';
import ChatLayout from 'components/chat/ChatLayout';
import ChatForm from 'components/chat/ChatForm';
import ChatHeader from 'components/chat/ChatHeader';
import ChatList from 'components/chat/ChatList';
import { Container } from 'styles/utils';
import AppLayout from 'components/common/AppLayout';

const Group: NextPage = () => {
  const { nickname, setNickname } = useUser();

  console.log(nickname, setNickname, '??');

  return (
    <AppLayout>
      <ChatLayout>
        <ChatHeader />
        <ChatList />
        <ChatForm />
      </ChatLayout>
    </AppLayout>
  );
};

const GroupPageContainer = styled(Container)`
  background-color: #fafafa;
  background-color: #d0ebff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
`;

export default Group;
