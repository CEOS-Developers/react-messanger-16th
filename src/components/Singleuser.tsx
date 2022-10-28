import { UserInformation } from "../interfaces/interface";
import styled from "styled-components";

const SingleUser = (user: UserInformation) => {
  return (
    <UserWrapper>
      <ProfileImage
        src={`${process.env.PUBLIC_URL}/images/${user.userid}.jpg`}
      />
      <div>
        <UserName>{user.name}</UserName>
        <UserStatus>{user.statusMessage}</UserStatus>
      </div>
    </UserWrapper>
  );
};

export default SingleUser;

const UserWrapper = styled.div`
   display: flex;
  flex- direction: "row";
`;

const UserName = styled.div`
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
`;

const UserStatus = styled.div`
  font-size: 0.8rem;
`;

//const ProfileImageWrapper = styled.div``;

const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.5rem;
  border-radius: 100%;
  border: double pink red;
`;
