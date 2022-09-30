import styled from 'styled-components';

interface Props {
  user_id: number;
  user_img: string;
  user_name: string;
  onClick: any;
  isSelected: boolean;
}

const HeaderItem: React.FC<Props> = ({
  user_id,
  user_img,
  user_name,
  onClick,
  isSelected,
}) => {
  return (
    <UserItemWrapper onClick={() => onClick(user_id)}>
      <UserImgWrapper>
        <UserImg src={user_img} isSelected={isSelected} />
      </UserImgWrapper>
      <UserName>{user_name}</UserName>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const UserImgWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: ${(props) => props.isSelected && 'brightness(50%)'};
`;

const UserName = styled.div`
  font-size: 0.75rem;
`;

export default HeaderItem;
