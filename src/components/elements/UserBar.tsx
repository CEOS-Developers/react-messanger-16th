import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';

interface userBarProps {
  username: string;
  date?: string;
  statusMessage?: string;
  marginTop?: string;
  userId?: number;
  imageSrc?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UserBar = ({ username, date, statusMessage, marginTop, imageSrc, onClick, userId }: userBarProps) => {
  return (
    <Wrapper onClick={onClick} value={userId} marginTop={marginTop}>
      <Row width="100%" gap="12px">
        <ImageThumbnail>
          <img src={imageSrc} />
        </ImageThumbnail>
        <Column width="80%" gap="1px" style={{ fontWeight: '500' }}>
          <Row width="100%" justifyContent="space-between">
            <span style={{ fontSize: '16px' }}>{username}</span>
            <span style={{ fontSize: '12px', color: '#a6a3a3' }}>{date}</span>
          </Row>
          <span style={{ fontSize: '12px', color: '#7b7878' }}>{statusMessage}</span>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default UserBar;

const Wrapper = styled.button<{ marginTop?: string }>`
  width: 100%;
  height: 70px;
  padding: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.marginTop};

  &:hover {
    background-color: #f4f3f3;
  }
`;

const ImageThumbnail = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid black;
`;
