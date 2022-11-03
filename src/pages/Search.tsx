import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../atom';

function Search() {
  const navigate = useNavigate();
  const UserList = useRecoilValue(userState);

  const [search, setSearch] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const filterName = UserList.users.filter((p) => {
    return p.name.replace(' ', '').includes(search);
  });
  const goToMain = () => {
    navigate('/');
  };
  return (
    <div>
      <RealAll>
        <SideTemplate>
          <Link to="/">
            <MainImg src={`/img/user.png`} />
          </Link>

          <Link to="/list">
            <MainImg src={`/img/chat.png`} />
          </Link>
        </SideTemplate>
        <BodyTemplate>
          <HeaderTemplate>
            <h4>친구</h4>

            <FindButton src={`/img/search.png`} onClick={goToMain}></FindButton>
          </HeaderTemplate>
          <InputName
            type="text"
            value={search}
            onChange={onChange}
            placeholder={'이름을 검색하시오'}
          />
          {filterName.map((m) => (
            <AllTemp>
              <ShowImg src={`/img/${m.id}.png`}></ShowImg>
              <MainId to={`/room/${m.id}`}>
                {m.name}
                <CurrentText>{m.currentText}</CurrentText>
              </MainId>
            </AllTemp>
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
const AllTemp = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  padding-top: 10px;
`;
const CurrentText = styled.div`
  font-size: 11px;
  color: grey;
  font-weight: bold;
`;
const InputName = styled.input`
  background-color: rgb(230, 230, 230);
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;
  padding: 3px 10px;
  box-sizing: border-box;
  width: calc(100% - 36px);
  margin: 9px 18px;
  border-radius: 20px 20px 20px 20px;
`;
const HeaderTemplate = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3px;
`;
const FindButton = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 200px;
  margin-top: 18px;
`;

const MainImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 15px;
  margin-top: 15px;
`;
const ShowImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  //margin: 0 15px;
  //margin-left: -5px;
  //argin-right: 5px;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 9px;
`;
const MainId = styled(Link)`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: left;
  //padding: 30px 25px;
  //padding-left: 5px;
  padding-bottom: 10px;
  //padding-top: 15px;
  text-decoration: none;

  box-sizing: border-box;
  color: black;
  border-radius: 3px;

  /*margin: 0px 10px;*/
`;

const BodyTemplate = styled.div`
  box-sizing: border-box;
  padding: 3 2px;
`;
const RealAll = styled.div`
  width: 350px;
  height: 680px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  display: grid;
  grid-template-columns: 68px auto;
`;
const SideTemplate = styled.div`
  background-color: rgb(230, 230, 230);
  border-right: 1px solid rgb(223, 223, 223);
  display: block;
  border-radius: 25px 0px 0px 25px;
`;

export default Search;
