// src/server.js
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import template from './template';
import Website from './app/index';

const server = express();

server.use('/assets', express.static(path.join(__dirname, 'assets')));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<Website {...initialState} />);

  res.send(
    template(
      {
        body: appString,
        title: 'Hello World from the server',
        initialState: JSON.stringify(initialState)
      }
    ));
});

server.listen(9998);
console.log('lesten on', 9998);
