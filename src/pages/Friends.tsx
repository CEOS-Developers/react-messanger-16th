/* eslint-disable no-console */
import ListHeader from '../components/list/ListHeader';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useState } from 'react';
import SearchBox from '../components/list/SearchBox';
import { friendsState } from '../states/atoms/friends';
import { userState } from '../states/atoms/user';
import Squircle from '../components/common/Squircle';
import { useNavigate } from 'react-router-dom';
import ListItem from '../components/list/ListItem';
import { IUser } from '../states/interface';
import { chattingStateByUserId } from '../states/atoms/chattings';

const Friends = () => {
  const friends = useRecoilValue(friendsState);
  const me = useRecoilValue(userState);
  const [search, setSearch] = useState(false);
  const [searchResult, setSearchResult] = useState(friends);

  return (
    <Wrapper>
      <ListHeader title={'친구'} setSearch={setSearch} />

      {search ? (
        <>
          <SearchBox
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          {searchResult.map((friend) => (
            <FriendListHeadless friend={friend} key={friend.userId}>
              {({ friend, handleClickListItem }) => (
                <ListItem
                  data={friend}
                  handleClickListItem={handleClickListItem}
                />
              )}
            </FriendListHeadless>
          ))}
        </>
      ) : (
        <>
          <MyProfile>
            <Squircle imageUrl={me.profileImage} selected={false} size={55} />
            <div>{me.userName}</div>
          </MyProfile>
          <Divider />
          <SubHeading>친구 {friends.length}</SubHeading>
          {friends.map((friend) => (
            <FriendListHeadless friend={friend} key={friend.userId}>
              {({ friend, handleClickListItem }) => (
                <ListItem
                  data={friend}
                  handleClickListItem={handleClickListItem}
                />
              )}
            </FriendListHeadless>
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Friends;

interface FriendListHeadlessProps {
  friend: IUser;
  children: (args: any) => JSX.Element;
}

const FriendListHeadless = ({ friend, children }: FriendListHeadlessProps) => {
  const navigate = useNavigate();
  const chattingId = useRecoilValue(
    chattingStateByUserId(friend.userId),
  ).chattingId;

  return children({
    friend: friend,
    handleClickListItem: () => navigate(`/room/${chattingId}`),
  });
};

const Wrapper = styled.div`
  width: 100%;
`;

const MyProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  font-size: 15px;
  & > div:first-child {
    margin-right: 12px;
  }
`;

const Divider = styled.div`
  margin: 0px 18px;
  width: calc(100%-36px);
  height: 1px;
  background-color: #f4f4f4;
`;

const SubHeading = styled.div`
  color: #999999;
  font-size: 12px;
  padding: 10px 18px;
`;
