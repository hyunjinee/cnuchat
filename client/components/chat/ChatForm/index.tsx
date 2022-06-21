import Image from 'next/image';
import { Form, MessageInput } from './styles';

const ChatForm: React.FC = () => {
  return (
    <Form>
      <MessageInput />
      <Image src="/assets/submit.svg" width={30} height={30} />
    </Form>
  );
};

export default ChatForm;
