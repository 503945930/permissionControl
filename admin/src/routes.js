import React from 'react';
import Home from './content/Home';
import KTV from './content/KTV';
import User from './content/User';

const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/user',
    exact: true,
    main: User
  },
  { path: '/ktv',
    exact: true,
    main: User
  }
];

module.exports = routes;
