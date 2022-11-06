import { atom } from 'recoil';
import message from './data/message.json';
import user from './data/user.json';
import { IChatBoard,IUser } from './interface';


export const listAtom = atom<IChatBoard[]>({
    key: 'chatList',
    default: message
});

export const userAtom = atom<IUser>({
    key: 'user',
    default: user[0]
})