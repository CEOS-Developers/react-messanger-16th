import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import { chatRoom } from './interface/chatRoom';
import { chatting } from './interface/chatting';

import ReactDOM from 'react-dom/client';
import App from './App';

export const activeId = atom<any>({
  key: 'activeId',
  default: 1,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
