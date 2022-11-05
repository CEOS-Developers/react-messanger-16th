import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router';
import { Container, MessangerBox, Header, TextShowArea, InputTextArea } from './ChattingPage.styled';
import { Wrapper } from '../homePage/HomePage.styled';
import UserProfile from '../elements/UserProfile';
import { Column } from '../elements/Wrapper.style';
import { userState, chatState, IChat } from '../../state/userState';
import { useRecoilState } from 'recoil';
import ChatBox from '../elements/ChatBox';
import CameraIcon from '../../image/emoji/CameraIcon';

const ChattingPage = () => {
  const locationState = useLocation().state;
  const divRef = useRef<HTMLDivElement>(null);

  const [username, setUsername] = useState('장영준');
  const [content, setContent] = useState<string>('');
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [chatList, setChatList] = useRecoilState(chatState);

  const targetUsername = locationState[0].username;
  const targetUserId = locationState[0].userId;
  const [targetChatList, setTargetChatList] = useState(chatList[targetUserId]);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [targetChatList]);

  useEffect(() => {
    setTargetChatList(chatList[targetUserId]);
  }, [chatList]);

  const onHandleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (value) {
      setIsButtonActive(true);
    }
    setContent(value);
  };

  const updateChatList = () => {
    if (typeof content === 'string' && content.trim().length === 0) {
      window.alert('문자를 입력해주세요.');
    } else {
      let time = `${new Date().getHours()} : ${new Date().getMinutes()}`;

      setChatList(() => {
        let tempList = chatList[targetUserId];
        tempList = [
          ...tempList,
          {
            username: username,
            messageTime: time,
            content: content,
          },
        ];

        return { ...chatList, [targetUserId]: tempList };
      });
    }

    setContent('');
    setIsButtonActive(false);
  };

  const onEnterKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      updateChatList();
    }
  };

  const onClickProfileImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUsername(e.currentTarget.children[0].id);
  };

  const encodeFileToBase64 = (files: any) => {
    const file = files[0];

    let fileReader = new FileReader();
    const time = `${new Date().getHours()} : ${new Date().getMinutes()}`;

    fileReader.onload = () => {
      let img = new Image();
      img.onload = () => {
        console.log((img.height / img.width) * 200);
        setImageHeight((img.height / img.width) * 200);
      };
      if (typeof fileReader.result === 'string') {
        img.src = fileReader.result;
      }
      console.log(fileReader.result);

      setChatList(() => {
        let tempList = chatList[targetUserId];
        tempList = [
          ...tempList,
          {
            username: username,
            messageTime: time,
            content: fileReader.result,
          },
        ];

        return { ...chatList, [targetUserId]: tempList };
      });
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Container>
      <Wrapper>
        <MessangerBox>
          <Header>
            <Column alignItems="center" gap="4px">
              <UserProfile
                username="장영준"
                onClick={(e: any) => onClickProfileImage(e)}
                isSelected={username === '장영준'}
              />
              <span style={{ fontSize: '12px' }}>장영준</span>
            </Column>
            <Column alignItems="center" gap="4px">
              <UserProfile
                username={targetUsername}
                onClick={(e: any) => onClickProfileImage(e)}
                isSelected={username === targetUsername}
              />
              <span style={{ fontSize: '12px' }}>{targetUsername}</span>
            </Column>
          </Header>

          <TextShowArea ref={divRef}>
            {targetChatList.map((chat: IChat, index: number) => {
              if (chat.username === username) {
                return (
                  <ChatBox
                    key={index}
                    className="opponent-text"
                    time={chat.messageTime}
                    content={chat.content}
                    imageHeight={imageHeight}
                    chatOwner={chat.username}
                    selectedUser={username}
                  />
                );
              } else {
                return (
                  <ChatBox
                    key={index}
                    time={chat.messageTime}
                    content={chat.content}
                    imageHeight={imageHeight}
                    chatOwner={chat.username}
                    selectedUser={username}
                  />
                );
              }
            })}
          </TextShowArea>
          <InputTextArea>
            <div>
              <input
                type="file"
                id="img-upload"
                style={{ display: 'none' }}
                onChange={(e) => encodeFileToBase64(e.target.files)}
                accept="image/x-png,image/gif,image/jpeg"
              />
              <label htmlFor="img-upload">
                <CameraIcon className="camera-icon" />
              </label>
            </div>
            <input
              type="text"
              className="text-area"
              autoFocus
              onKeyPress={onEnterKeyPress}
              onChange={(e) => onHandleInputText(e)}
              value={content}
            />
            <button className="send-button" onClick={updateChatList} disabled={!isButtonActive}>
              전송
            </button>
          </InputTextArea>
        </MessangerBox>
      </Wrapper>
    </Container>
  );
};

export default ChattingPage;
