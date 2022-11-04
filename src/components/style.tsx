import { Link } from "react-router-dom";
import styled from "styled-components";

interface imageStyle {
  brightness?: string;
  width?: number;
  height?: number;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const UserProfileImage = styled.img<imageStyle>`
  width: ${(props) => props.width || 3}rem;
  height: ${(props) => props.height || 3}rem;
  border-radius: 1rem;
  border-width: 0.3rem;
  filter: ${(props) => props.brightness || "brightness(100%)"};
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const ListWrap = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 19rem;
`;

const ListDiv = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

// Profile Style
const ProfileContainer = styled.div`
  display: flex;
  padding: 5px 0;
  width: 100%;
`;
const ProfileImg = styled.img<{ picSize?: number }>`
  width: ${(props) => props.picSize || 3}rem;
  height: ${(props) => props.picSize || 3}rem;
  border-radius: 1rem;
`;
const NameWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 7px;
  width: 100%;
`;
const Name = styled.div`
  font-size: 13px;
  padding-bottom: 3px;
`;
const Msg = styled.div`
  color: #7d7d7d;
  font-size: 11px;
`;

export {
  StyledLink,
  UserProfileImage,
  Container,
  ListWrap,
  ListDiv,
  ProfileContainer,
  ProfileImg,
  Name,
  NameWrap,
  Msg,
};
