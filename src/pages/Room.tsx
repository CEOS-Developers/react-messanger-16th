import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import RoomBody from '../components/room/RoomBody';
import RoomFooter from '../components/room/RoomFooter';
import RoomHeader from '../components/room/RoomHeader';
import { chattingStateByChattingId } from '../states/atoms/chattings';

const Room = () => {
  const { roomId } = useParams();
  const room = useRecoilValue(chattingStateByChattingId(parseInt(roomId!)));
  return (
    <Wrapper>
      <RoomHeader userIdList={room.userIdList} />
      <RoomBody chatList={room.chatList} />
      <RoomFooter userId={room.userIdList[0]} chattingId={room.chattingId} />
    </Wrapper>
  );
};

export default Room;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 100px auto 120px;
`;
