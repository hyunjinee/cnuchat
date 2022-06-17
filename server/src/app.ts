import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

async function start() {
  const app = express();
  const server = http.createServer(app);

  // const server = new Server({
  //   cors: {origin:
  //   }
  // })
}

start();
