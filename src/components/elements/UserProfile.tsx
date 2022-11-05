import styled from 'styled-components';

interface IUser {
  imageSrc?: string;
  onClick?: (e: any) => any;
  username: string;
  isSelected: boolean;
}

const UserThumbnail = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => (props.isSelected ? '#242424' : 'transparent')};

  cursor: pointer;

  img {
    background-color: pink;
  }
`;

const UserProfile = ({ onClick, imageSrc, username, isSelected }: IUser) => {
  return (
    <UserThumbnail onClick={onClick} isSelected={isSelected}>
      <img src={imageSrc} alt="" id={username} />
    </UserThumbnail>
  );
};

export default UserProfile;
