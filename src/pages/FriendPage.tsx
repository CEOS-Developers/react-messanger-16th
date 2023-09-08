import userData from "../data/userData.json";
import { ProfileImage } from "../common/ProfileImage";
import styled from "styled-components";

export default function FriendPage() {
  const users = userData.users;

  return (
    <div>
      {users.map((user) => (
        <Item>
          <ProfileImage src={`${user.profileImage}`} />
          <div className="text">
            <div className="name">{user.name}</div>
            <div className="status">{user.message}</div>
          </div>
        </Item>
      ))}
    </div>
  );
}

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;

  :hover {
    background-color: whitesmoke;
  }

  .status {
    color: gray;
    font-size: 0.8rem;
  }
`;
