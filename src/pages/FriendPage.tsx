import userData from "../data/userData.json";
import { Item, ProfileImage } from "../components/Item";

export default function FriendPage() {
  const users = userData.users;

  return (
    <div>
      {users.map((user) => (
        <Item>
          <ProfileImage src={user.profileImage} />
          <div className="text">
            <div className="title">{user.name}</div>
            <div className="content">{user.message}</div>
          </div>
        </Item>
      ))}
    </div>
  );
}
