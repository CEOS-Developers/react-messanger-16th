import dayjs from 'dayjs';
import { FormEvent, KeyboardEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { IChat } from '../../states/interface';
import { v4 as uuidv4 } from 'uuid';
import { chattingStateByChattingId } from '../../states/atoms/chattings';
import { useRecoilState } from 'recoil';

const RoomFooter = ({
  userId,
  chattingId,
}: {
  userId: number;
  chattingId: number;
}) => {
  const [chatting, setChatting] = useRecoilState(
    chattingStateByChattingId(chattingId),
  );
  const { value, onChange, resetValue } = useInput('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const sendMessage = () => {
    if (value.length !== 0 && value.replace(/ /g, '').length !== 0) {
      const newChat: IChat = {
        userId: userId,
        content: value,
        date: dayjs().format(),
        like: false,
        chatId: uuidv4(),
      };

      setChatting({ ...chatting, chatList: [...chatting.chatList, newChat] });
      resetValue();

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sendMessage();
  };

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // 우왕 : https://velog.io/@corinthionia/JS-keydown에서-한글-입력-시-마지막-음절이-중복-입력되는-경우-함수가-두-번-실행되는-경우
      if (e.nativeEvent.isComposing === false) {
        sendMessage();
        e.preventDefault();
      }
    }
  };
  return (
    <Wrapper>
      <div>
        <MessageInput
          value={value}
          onChange={onChange}
          ref={inputRef}
          onKeyDown={onEnter}
        />
        <SendButton
          onClick={(e) => onSubmit(e)}
          disabled={value.length === 0 ? true : false}
        >
          전송
        </SendButton>
      </div>
    </Wrapper>
  );
};

export default RoomFooter;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 16px;
  @media screen and (min-width: 600px) {
    border-radius: 0px 0px 15px 15px;
  }

  & > div {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto 88px;
    grid-gap: 16px;
  }
`;
const MessageInput = styled.textarea`
  border: 0px;
  resize: none;
  overflow-y: scroll;
  &:focus {
    outline: 0;
  }
`;
const SendButton = styled.button`
  width: 88px;
  height: 88px;
  background-color: #fbe64d;
  border: 1px solid #eeda48;
  border-radius: 5px;
  &:disabled {
    background-color: #f9f9f9;
    border: 1px solid #ececec;
  }
`;
