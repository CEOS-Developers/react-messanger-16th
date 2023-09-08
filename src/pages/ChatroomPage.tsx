import { Link } from "react-router-dom";

import chatData from "../data/chatData.json";
import { getRoomMembers } from "../hooks/getRoomMembers";
import { Item, ProfileImage } from "../components/Item";

const ChatroomPage = () => {
  const chatrooms = chatData.rooms;

  return (
    <div>
      {chatrooms.map((room) => {
        const roomMembers = getRoomMembers(room.roomId, false);
        return (
          <Link to={`/chatrooms/${room.roomId}`}>
            <Item>
              {roomMembers.map((member, id) => (
                <ProfileImage src={`${member.profileImage}`} key={id} />
              ))}
              <div>
                <div className="title">
                  {roomMembers.map((member) => member.name).join(", ")}
                </div>
                <div className="content">
                  {room.chats[room.chats.length - 1].text}
                </div>
              </div>
            </Item>
          </Link>
        );
      })}
    </div>
  );
};

export default ChatroomPage;
