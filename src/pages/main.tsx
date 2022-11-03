import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MainBox from '../components/box/mainbox';
import UserBox from '../components/users/userbox';
import { UserListInfo } from '../interfaces/interface';
import { userListState } from '../state/state';

const Container = styled.div`
  .text {
    margin-top: 25px;
    margin-left: 25px;
  }

  .friends {
    margin-top: 10px;
  }
`;

const Search = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 10px;
  border: none;
  background-color: rgb(233, 233, 233);
  outline: none;
  margin-left: 25px;
  margin-top: 10px;
`;

const Main = () => {
  const [userList, setUserList] = useRecoilState<UserListInfo[]>(userListState);
  const [isSearch, setIsSearch] = useState(false);
  const [searchName, setSearchName] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
      setSearchName(e.target.value);
    }
  };

  // const SearchUser = ({
  //   userList,
  //   IsSearch,
  // }: {
  //   userList: UserListInfo[];
  //   IsSearch: boolean;
  // }) => {
  //   return userList.filter((user) => {
  //     if (IsSearch) {
  //       return user.userName.toLowerCase().includes(searchName.toLowerCase());
  //     } else {
  //       return user;
  //     }
  //   });
  // };

  return (
    <MainBox>
      <Container>
        <p className="text">친구</p>
        <UserBox user={userList[0]} />
        <Search placeholder="친구를 검색해보세요" onChange={onSearch} />
        <div className="friends">
          {isSearch ? (
            <>
              {userList
                .filter((user) => {
                  if (isSearch) {
                    return user.userName.includes(searchName);
                  } else {
                    return user;
                  }
                })
                .map((user, index) => {
                  if (user.userId !== 0)
                    return <UserBox user={user} key={index} />;
                })}
            </>
          ) : (
            <>
              {userList.map((user, index) =>
                index ? <UserBox user={user} key={index} /> : ''
              )}
            </>
          )}
        </div>
      </Container>
    </MainBox>
  );
};

export default Main;
