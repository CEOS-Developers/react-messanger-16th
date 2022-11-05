import userData from "../data/userData.json";
import { ProfileImage } from "../common/StyledComponents";

const FriendPage = () => {
  const users = userData.users;

  return (
    <div>
      {users.map((user) => (
        <div>
          <ProfileImage src={`${user.profileImage}`} />
          <span>{user.name}</span>
          <div>{user.message}</div>
        </div>
      ))}
    </div>
  );
};

export default FriendPage;
