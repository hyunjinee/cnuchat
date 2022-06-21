import type { NextPage } from 'next';
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
    <Container>
      <ChatLayout>
        <ChatHeader />
        <ChatList />
        <ChatForm />
      </ChatLayout>
    </Container>
  );
};

export default Group;
