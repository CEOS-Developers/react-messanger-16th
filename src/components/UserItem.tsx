import { User } from "../interface";
import styled from "styled-components";
import { ProfileImage } from "../StyledComponents";

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

export default UserItem;
