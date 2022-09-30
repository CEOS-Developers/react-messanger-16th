import { useContext } from 'react';

import styled from 'styled-components';

import { Context } from '../App';
import HeaderItem from './HeaderItem';

type User = {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
};

const Header = ({ userList }: { userList: User[] }) => {
  const { setUsers } = useContext(Context);

  const handleClickChangeUser = (user: number) => {
    userList.map((it) =>
      it.user_id === user ? (it.isSelected = true) : (it.isSelected = false)
    );
    setUsers(userList);
    // console.log(userList.map((user) => user.isSelected));
  };

  return (
    <HeaderWrapper>
      {userList.map((it) => (
        <HeaderItem key={it.user_id} {...it} onClick={handleClickChangeUser} />
      ))}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  flex-grow: 0.5;

  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default Header;
