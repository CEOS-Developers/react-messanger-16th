import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const MessangerBox = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 15%;
  padding: 20px;
`;

export const TextShowArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
  background-color: #ff5a0080;
  padding: 20px;
  overflow-y: scroll;

  & .opponent-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const InputTextArea = styled.div.attrs<{ isButtonActive: boolean }>((props) => ({
  isButtonActive: props.isButtonActive,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 12px;
  gap: 20px;

  & .text-area {
    width: 70%;
    height: 100%;
    border: none;
    padding-left: 12px;
    vertical-align: top;
  }

  & .send-button {
    height: 100%;
    width: 25%;
    padding: 10px;
    background-color: #f9e000;

    &:disabled {
      background-color: #ffe68e;
    }
  }

  & .camera-icon {
    padding-left: 4px;
    cursor: pointer;
  }
`;
