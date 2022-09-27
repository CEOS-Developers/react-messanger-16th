import React, { useReducer, useContext, createContext, Dispatch } from 'react';
import userInfo from '../assets/userInfo';

// https://react.vlpt.us/using-typescript/04-ts-context.html

type State = {
  id: number;
  name: string;
  img: string;
  active: boolean;
};

type Action = { type: 'SET_USER'; id: number };

type SampleDispatch = Dispatch<Action>;
