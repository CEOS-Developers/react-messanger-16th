import styled from 'styled-components';
import { Row, Column } from './Wrapper.style';

interface chatBoxProps {
  className?: string;
  marginBottom?: string;
  imageSrc?: string;
  time: string;
  content: string;
  chatOwner: string;
  selectedUser: string;
  imageSize?: number;
  imageHeight?: number;
}

const ChatBox = ({
  className,
  marginBottom,
  imageSrc,
  time,
  content,
  chatOwner,
  selectedUser,
  imageHeight,
}: chatBoxProps) => {
  return (
    <>
      {selectedUser !== chatOwner ? (
        content.length > 1000 ? (
          <div className={className}>
            <Row gap="4px" marginBottom="8px">
              <UserThumbnail>
                <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
              </UserThumbnail>
              <Column gap="3px" justifyContent="center">
                <span style={{ fontSize: '4px' }}>{chatOwner}</span>
                <Row alignItems="end" gap="8px">
                  <img className="image-container" style={{ width: '200px', height: imageHeight }} src={content} />
                  <span style={{ fontSize: '11px' }}>{time}</span>
                </Row>
              </Column>
            </Row>
          </div>
        ) : (
          <div className={className}>
            <Row gap="4px" marginBottom="8px">
              <UserThumbnail>
                <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
              </UserThumbnail>
              <Column gap="3px" justifyContent="center">
                <span style={{ fontSize: '4px' }}>{chatOwner}</span>
                <Row alignItems="end" gap="8px">
                  <TextArea style={{ maxWidth: '200px' }}>{content}</TextArea>
                  <span style={{ fontSize: '11px' }}>{time}</span>
                </Row>
              </Column>
            </Row>
          </div>
        )
      ) : content.length > 1000 ? (
        <div className={className}>
          <Row gap="4px" marginBottom="8px">
            <Column gap="3px" justifyContent="center" alignItems="flex-end">
              <span style={{ fontSize: '4px' }}>{chatOwner}</span>
              <Row alignItems="end" gap="8px">
                <span style={{ fontSize: '11px' }}>{time}</span>
                <img
                  alt="프로필 사진"
                  className="image-container"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  src={content}
                />
              </Row>
            </Column>
            <UserThumbnail>
              <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
            </UserThumbnail>
          </Row>
        </div>
      ) : (
        <div className={className}>
          <Row gap="4px" marginBottom="8px">
            <Column gap="3px" justifyContent="center" alignItems="flex-end">
              <span style={{ fontSize: '4px' }}>{chatOwner}</span>
              <Row alignItems="end" gap="8px">
                <span style={{ fontSize: '11px' }}>{time}</span>
                <TextArea style={{ maxWidth: '200px' }}>{content}</TextArea>
              </Row>
            </Column>
            <UserThumbnail>
              <img src={imageSrc} alt="프로필 사진" id={chatOwner} />
            </UserThumbnail>
          </Row>
        </div>
      )}
    </>
  );
};

export default ChatBox;

const TextArea = styled.div`
  padding: 4px 8px;
  background-color: #efefef;
  border-radius: 10px;
  word-wrap: break-word;
`;

const UserThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
`;
