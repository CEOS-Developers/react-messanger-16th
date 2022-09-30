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
      {user.name}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default UserItem;
