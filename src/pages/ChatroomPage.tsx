import { Link } from "react-router-dom";

const ChatroomPage = () => {
  return (
    <div>
      <Link to="/chatrooms/0">채팅방0</Link>
      <Link to="/chatrooms/1">채팅방1</Link>
      <Link to="/chatrooms/2">채팅방2</Link>
    </div>
  );
};

export default ChatroomPage;
