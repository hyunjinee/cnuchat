import express from 'express';
import http from 'http';
import { Socket, Server } from 'socket.io';

const socketLoader = (server: http.Server, app: express.Application) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST'],
    },
  });
};

export default socketLoader;
