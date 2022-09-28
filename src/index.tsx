import React from 'react';
import { RecoilRoot } from 'recoil';
import { chatRoom } from './interface/chatRoom';
import { chatting } from './interface/chatting';

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
