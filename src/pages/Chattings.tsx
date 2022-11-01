import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ListHeader from '../components/list/ListHeader';
import ListItem from '../components/list/ListItem';
import { chattingsState } from '../states/atoms/chattings';
import { IChatting } from '../states/interface';

const Chattings = () => {
  const chattings = useRecoilValue(chattingsState);

  return (
    <Wrapper>
      <ListHeader title={'채팅'} />
      {chattings.map((chatting) => (
        <ChattingListHeadless chatting={chatting} key={chatting.chattingId}>
          {({ chatting, handleClickListItem }) => (
            <ListItem
              data={chatting}
              handleClickListItem={handleClickListItem}
            />
          )}
        </ChattingListHeadless>
      ))}
    </Wrapper>
  );
};

export default Chattings;

interface ChattingListHeadlessProps {
  chatting: IChatting;
  children: (args: any) => JSX.Element;
}

const ChattingListHeadless = ({
  chatting,
  children,
}: ChattingListHeadlessProps) => {
  const navigate = useNavigate();

  return children({
    chatting: chatting,
    handleClickListItem: () => navigate(`/room/${chatting.chattingId}`),
  });
};

const Wrapper = styled.div`
  width: 100%;
`;

// https://www.howdy-mj.me/design/headless-components
