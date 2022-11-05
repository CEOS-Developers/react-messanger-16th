import { Link } from "react-router-dom";

import chatData from "../data/chatData.json";
import userData from "../data/userData.json";

import { ProfileImage } from "../common/StyledComponents";

const ChatroomPage = () => {
  const chatrooms = chatData.rooms;
  const users = userData.users;

  return (
    <div>
      {chatrooms.map((room) => (
        <Link to={`/chatrooms/${room.roomId}`}>
          <div>
            <ProfileImage src={`${users[room.users[1]].profileImage}`} />
            {users[room.users[1]].name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatroomPage;
