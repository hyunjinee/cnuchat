import React, { useState } from 'react';
import Image from 'next/image';

import useDialog from 'hooks/useDialog';
import Dialog from 'components/common/Dialog';
import DialogReConnect from 'components/chat/DialogReConnect';
import { Container, FeatureContainer, Form, ButtonContainer, MessageInput } from './styles';

const ChatForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const { dialogVisible, toggleDialog } = useDialog();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
  };

  const onCloseDialog = () => toggleDialog();

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FeatureContainer onClick={() => toggleDialog()}>
          <Image src="/assets/refresh.svg" alt="재연결" width={30} height={30} />
        </FeatureContainer>

        <MessageInput onChange={onChange} value={message} />

        <ButtonContainer>
          <button type="submit">
            <Image src="/assets/submit.svg" width={50} height={50} />
          </button>
        </ButtonContainer>
      </Form>

      {dialogVisible && (
        <Dialog type={'alert'} onClose={onCloseDialog}>
          <DialogReConnect />
        </Dialog>
      )}
    </Container>
  );
};

export default ChatForm;
