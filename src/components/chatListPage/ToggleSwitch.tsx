import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ChatRoom } from "../../interfaces/interface";
import { chatState, SortState } from "../../store/atom";

const ToggleSwitch = () => {
  const [isOn, setisOn] = useRecoilState(SortState);
  const [isNew, setIsNew] = useState("최신 메시지 순");
  const setChatData = useSetRecoilState(chatState);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  useEffect(() => {
    isOn ? setIsNew("오래된 메시지 순") : setIsNew("최신 메시지 순");
    setChatData((chatRooms: ChatRoom[]) => {
      const chatArray = [...chatRooms];
      const toggledItem = chatArray.reverse();
      return [...toggledItem];
    });
  }, [isOn, setChatData]);

  return (
    <div>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}>
          &nbsp;&nbsp;최신 메시지 순&nbsp;&nbsp;&nbsp;&nbsp;오래된 메시지
          순&nbsp;
        </div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
          {isNew}
        </div>
      </ToggleContainer>
    </div>
  );
};

export default ToggleSwitch;

const ToggleContainer = styled.div`
  position: relative;
  height: 1.5rem;
  width: 100%;
  left: 20%;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: center;

  > .toggle-container {
    width: 14rem;
    height: 1.5rem;
    border-radius: 25px;
    background-color: #eeeeee;
    border: 1px solid #000;
  }

  > .toggle--checked {
    background-color: #eeeeee;
    left: 7rem;
    transition: 2s;
  }

  > .toggle-circle {
    position: absolute;
    top: 0;
    width: 7rem;
    height: 1.5rem;
    border-radius: 25px;
    background: linear-gradient(180deg, #ffffff 0%, #85e250 100%);
    background-color: #aeff9c;
    transition: 2s;
    border: 1px solid #000;
  }
`;
