import Image from 'next/image';
import { ButtonContainer, Container, Opponent } from './styles';
import Back from '/public/assets/left.svg';

const ChatHeader: React.FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <Image src={Back} width="24" height="24" alt="뒤로가기" />
      </ButtonContainer>
      <Opponent>안녕하세요 현진님</Opponent>
    </Container>
  );
};

export default ChatHeader;
