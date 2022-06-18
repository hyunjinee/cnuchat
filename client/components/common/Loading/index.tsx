import Image from 'next/image';
import { Container, Spinner } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner>
        <Image src="/assets/baeknam.png" width={200} height={200} />
      </Spinner>
    </Container>
  );
};

export default Loading;
