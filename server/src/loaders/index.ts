import http from 'http';
import express from 'express';

import socketLoader from './socket';
import expressLoader from './express';

const loader = (server: http.Server, app: express.Application) => {
  socketLoader(server, app);
  expressLoader(app);
};

export default loader;
