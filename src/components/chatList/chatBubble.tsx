import React from 'react';
import styled from 'styled-components';

const ChatBubble = (userId: any, speakerId: any, text: any) => {
  return (
    // <Container>
    <>
      {userId === speakerId ? (
        <>
          <BubbleBox>
            <BubbleRight>
              <Text> {text} </Text>
            </BubbleRight>
          </BubbleBox>
        </>
      ) : (
        <BubbleBox>
          <BubbleLeft>
            <Text> {text} </Text>
          </BubbleLeft>
        </BubbleBox>
      )}

      {/* </Container> */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 25rem;
  height: 1rem;
  top-margin: 0.2rem;
  background-color: #8bc097;
`;

const BubbleBox = styled.div`
  display: flex;
  position: relative;
  width: 25rem;
  height: 3rem;
  background-color: #8bc097;
`;

const BubbleLeft = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const BubbleRight = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const Text = styled.text`
  padding: 0.5rem;
  text-size: 1rem;
`;

export default ChatBubble;
