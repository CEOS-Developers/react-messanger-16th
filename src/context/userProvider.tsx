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

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.id, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    default:
      throw new Error('Unhandled action');
  }
}
