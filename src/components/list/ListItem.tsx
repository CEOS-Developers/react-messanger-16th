import styled, { css } from 'styled-components';
import React from 'react';
import { IChatting, IUser } from '../../states/interface';
import Squircle from '../common/Squircle';
import { timeForToday } from '../room/getTimeForToday';
import useUser from '../../hooks/useUser';

interface ListItemProps {
  data: IUser | IChatting;
  handleClickListItem: () => void;
}

// 타입 가드
const isChattingType = (data: any): data is IChatting => {
  return data.chattingId !== undefined;
};

const ListItem = ({ data, handleClickListItem }: ListItemProps) => {
  const isChatting = isChattingType(data);
  const { getUserById } = useUser();
  const user = isChatting ? getUserById(data.userIdList[1]) : data;

  return (
    <Item isChatting={isChatting} onClick={handleClickListItem}>
      <ProfileImage>
        <Squircle
          imageUrl={user.profileImage}
          selected={false}
          size={isChatting ? 45 : 40}
        />
      </ProfileImage>
      <Info>
        <div>{user.userName}</div>
        <InfoSub>
          {isChatting
            ? data.chatList[data.chatList.length - 1].content
            : data.statusMessage}
        </InfoSub>
      </Info>
      {isChatting && (
        <LastDate>
          {timeForToday(data.chatList[data.chatList.length - 1].date)}
        </LastDate>
      )}
    </Item>
  );
};

export default React.memo(ListItem);

const Item = styled.div<{ isChatting: boolean }>`
  display: flex;
  align-items: center;
  ${({ isChatting }) =>
    isChatting
      ? css`
          padding: 12px 18px;
        `
      : css`
          padding: 8px 18px;
        `}
  cursor: default;
  &:hover {
    background-color: #f7f8f8;
  }
`;

const ProfileImage = styled.div`
  margin-right: 10px;
`;
const Info = styled.div`
  font-size: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoSub = styled.div`
  color: #7f7f7f;
  font-size: 12px;
  margin-top: 2px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const LastDate = styled.div`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 400;
  margin-left: auto;
  margin-bottom: auto;
  min-width: 50px;
  text-align: right;
`;
