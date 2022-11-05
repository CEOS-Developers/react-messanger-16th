import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 680px;
  /* border: 2px solid black; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 40px 0px;
  width: 18%;
  background-color: #efefef;
`;

export const FriendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 20px;

  hr {
    width: 100%;
    border: 0.5px solid rgb(150, 150, 150);
  }
`;
