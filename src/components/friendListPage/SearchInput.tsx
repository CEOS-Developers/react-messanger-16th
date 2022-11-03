import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { userInformationState, userSearchState } from "../../store/atom";

const SearchInput = () => {
  const message = useInput("");
  const userData = useRecoilState(userInformationState);
  const setSearchData = useSetRecoilState(userSearchState);

  useEffect(() => {
    const filteredResult = userData[0].filter((user) => {
      return user.name.toLowerCase().includes(message.value.toLowerCase());
    });
    setSearchData(filteredResult);
  }, [message.value, setSearchData]);

  return (
    <InputForm>
      <InputText {...message} />
      <InputButton>검색</InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  position: absoulte;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
`;

// 시간 되면 textarea로 바꾸기...

const InputText = styled.input`
  width: 85%;
  margin-left: 1rem;
  font-size: 1rem;
  border: 0;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #000000;
  height: 1.7rem;
`;

const InputButton = styled.button`
  width: 17%;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #323232;
  border-radius: 28px;
  border: 1px solid #000000;
  background: linear-gradient(180deg, #ffffff 0%, #97e545 100%);
  cursor: pointer;
  height: 2rem;
`;

export default SearchInput;
