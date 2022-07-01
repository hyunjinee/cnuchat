import { Server, Socket } from 'socket.io';
import { Room } from '../types/room';

export const pipe = (...functions: Function[]) => {
  return (first_value: { io: Server; socket: Socket; rooms: Room[] }) =>
    functions.reduce((prev_value, func) => func(prev_value), first_value);
};
