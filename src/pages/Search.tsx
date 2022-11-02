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
            <FindButton src={`/img/find.png`}></FindButton>
          </HeaderTemplate>
          <InputName
            type="text"
            value={search}
            onChange={onChange}
            placeholder={'이름을 검색하시오'}
          />
          {filterName.map((m) => (
            <div>
              <MainId to={`/room/${m.id}`}>
                <ShowImg src={`/img/${m.id}.png`}></ShowImg>
                {m.name}
              </MainId>
            </div>
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}

const InputName = styled.input`
  background-color: rgb(230, 230, 230);
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;
  padding: 3px 10px;
  box-sizing: border-box;
  width: calc(100% - 36px);
  margin: 9px 18px;
`;
const HeaderTemplate = styled.div`
  display: flex;
  flex-direction: row;
`;
const FindButton = styled.img`
  width: 28px;
  height: 28px;
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
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 0 15px;
  border-radius: 3px;
`;
const MainId = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px 25px;
  text-decoration: none;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
  color: black;
  border-radius: 3px;

  /*margin: 0px 10px;*/
`;
const OneId = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 18px;
  text-decoration: none;
  font-size: small;
  color: black;
`;
const BodyTemplate = styled.div`
  box-sizing: border-box;
  padding: 0 3px;
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
`;

export default Search;
