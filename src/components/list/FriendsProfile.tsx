import styled from "styled-components";
import { profile } from "../../interface/interface";
import { Name, NameWrap, ProfileContainer, ProfileImg, Msg } from "../style";

const FriendsProfile = ({
  userID,
  profileImg,
  name,
  PersonalMessage,
}: profile) => {
  return (
    <ProfileContainer>
      <ProfileImg src={`img/${profileImg}.png`} />
      <NameWrap>
        <Name>{name}</Name>
        <Msg>{PersonalMessage}</Msg>
      </NameWrap>
    </ProfileContainer>
  );
};

export default FriendsProfile;
