import { Container } from './styles';

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ChatLayout;
