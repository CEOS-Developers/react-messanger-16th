import user from '../../data/user.json';
import Friend from './Friend';
import { IFriendList } from '../../interface';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function FriendList() {
  const me = user.slice(0, 1);
  const onlyfriendslist = user.slice(1, 5);
  return (
    <div>
      <div>
        {me.map(({ userid, status, name }: IFriendList) => (
          <Link
            to={`/chatroom/${userid}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Friend key={userid} status={status} name={name} />
          </Link>
        ))}
      </div>
      <hr style={{ border: 'solid 0.5px gray', width: '290px' }} />
      <div>
        <FriendNum>친구 {user.length - 1}</FriendNum>
        {onlyfriendslist.map(({ userid, status, name }: IFriendList) => (
          <Link
            to={`/chatroom/${userid}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Friend key={userid} status={status} name={name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const FriendNum = styled.span`
  margin-left: 10px;
  font-size: 13px;
  color: gray;
`;

export default FriendList;
