import { NextPage } from 'next';
import { MouseEventHandler } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Personal: NextPage = () => {
  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    socket.emit('send-message', { name: socket.id });
  };

  return <div onClick={onClick}>hi</div>;
};

export default Personal;
