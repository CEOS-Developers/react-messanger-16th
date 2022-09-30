import { User } from "../interface";
import styled from "styled-components";

interface UserItemProps {
  selected: boolean;
  user: User;
  changeUser(id: number): void;
}

const UserItem = ({ selected, user, changeUser }: UserItemProps) => {
  return (
    <Wrapper onClick={() => changeUser(user.id)}>
      <ProfileImage selected={selected} src={user.profileImage} />
      <p>{user.name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  object-fit: cover;
  background-color: black;
  opacity: ${({ selected }: { selected: boolean }) =>
    selected ? "50%" : "100%"};
`;

export default UserItem;
