import Image from 'next/image';
import React, { useState } from 'react';
import {
  Container,
  FeatureContainer,
  Form,
  ButtonContainer,
  MessageInput,
} from './styles';

const ChatForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FeatureContainer>
          <div>재연결</div>
          {/* <div>+</div> */}
        </FeatureContainer>

        <MessageInput onChange={onChange} value={message} />

        <ButtonContainer>
          <button type="submit">
            <Image src="/assets/submit.svg" width={50} height={50} />
          </button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ChatForm;
