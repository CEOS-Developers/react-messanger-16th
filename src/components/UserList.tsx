import { useRecoilState } from "recoil";
import { userInformationState } from "../store/atom";
import styled from "styled-components";
import { UserInformation } from "../interfaces/interface";
import SingleUser from "./SingleUser";

const UserList = () => {
  const userData = useRecoilState(userInformationState);
  return (
    <ItemWrapper>
      {userData[0].map((user: UserInformation) => (
        <SingleUser key={user.userid} {...user} />
      ))}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
`;

export default UserList;
