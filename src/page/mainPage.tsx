import {useState} from 'react';
import styled from 'styled-components';
import Navigator from '../components/navigator';
import userInfo from '../assets/userInfo.json';
import ChatProfile from '../components/chatProfile';
import search from '../assets/search.png'
import { useRecoilState } from 'recoil';
import { activeId } from '../recoil/store';

const MainPage = () => {
  const [id, setId] = useRecoilState(activeId);
  setId(5);
  
  const [value, setValue] = useState('');
  const [isSearch, setSearch] = useState(false);
  return (
    <Background>
      <Container>
        <Navigator/>
        <ColumnContainer> 
          <div style={{display: "flex", flexDirection:"row"}}>
            <Title> Friends </Title>
            <Search src={search} onClick={() => setSearch(!isSearch)}/>
          </div>
          
          {isSearch? 
            <SearchInput
            placeholder='이름을 입력하세요'
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }/>
            : <></>}

          {userInfo.map((user, idx) => (
            <>
            {idx!=5 && (!isSearch || ( isSearch && user.userName.includes(value)))?
              <ChatProfile
              key={idx}
              img={user.userImage}
              name={user.userName}
              message={user.status}
              id={idx}/>
              :
              <></>
            }
          </>
          ))}
       </ColumnContainer>
      </Container>
    </Background>
  );
}

export default MainPage;

const Background = styled.div`
  display: relative;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 25rem;
  height: 44rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #e8e8e8;
  border-radius: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`

const Search = styled.img`
  margin-top: 1.9rem;
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
`

const SearchInput = styled.input`
  height: 1.5rem;
  width: 20rem;
  border: 0.5px solid grey;
  background-color: #f3f3f3;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction : column;
  height: 100%;
  width: 100%;
`;