import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import MainPage from './pages/MainPage';
import Room from './pages/Room';
import Search from './pages/Search';
import OwnChat from './pages/OwnChat';
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
