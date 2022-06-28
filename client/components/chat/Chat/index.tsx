import { Container, Message } from './styles';

interface ChatProps {
  type: 'me' | 'other';
  message: string;
}

const Chat: React.FC<ChatProps> = ({ type, message }) => {
  return (
    <Container type={type}>
      <Message>{message}</Message>
    </Container>
  );
};

export default Chat;
