import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Squircle from '../common/Squircle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentState } from '../../states/atoms/current';
import { usersStateByUserIdList } from '../../states/atoms/user';

const RoomHeader = ({ userIdList }: { userIdList: number[] }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useRecoilState(currentState);
  const users = useRecoilValue(usersStateByUserIdList(userIdList));

  return (
    <Wrapper>
      <Close onClick={() => navigate(-1)} />
      <CurrentSelecter>
        {users.map((user) => (
          <UserIcon onClick={() => setCurrent(user.userId)} key={user.userId}>
            <Squircle
              imageUrl={user.profileImage}
              size={50}
              selected={current === user.userId}
            />
            {current === user.userId && <div className="selected">선택 중</div>}
            <div>{user.userName}</div>
          </UserIcon>
        ))}
      </CurrentSelecter>
    </Wrapper>
  );
};

export default RoomHeader;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 16px;
  @media screen and (min-width: 600px) {
    border-radius: 15px 15px 0px 0px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentSelecter = styled.div`
  display: flex;
`;

const UserIcon = styled.div`
  width: 50px;
  margin-left: 16px;
  position: relative;
  cursor: pointer;

  & > .selected {
    font-size: 10px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 36%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;

    color: white;
  }

  & > div:last-child {
    font-size: 12px;
    text-align: center;
    margin-top: 8px;
  }
`;

const Close = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ed6952;
  border: 1px solid #d04e41;
  margin-bottom: auto;
  position: relative;

  &:hover {
    &:after {
      content: '✕';
      position: absolute;
      font-size: 7px;
      left: 2.7px;
      line-height: 12px;
    }
  }
`;
