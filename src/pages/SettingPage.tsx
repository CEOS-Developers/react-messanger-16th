import styled from "styled-components";
import { Item } from "../components/Item";

export default function SettingPage() {
  return (
    <Wrapper>
      <a target="_blank" href="https://github.com/seondal/react-messanger-16th">
        <Item>
          <div className="title">Github Repository</div>
        </Item>
      </a>
      <a
        target="_blank"
        href="https://velog.io/@seondal/React-%EC%99%80-Typescript-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9">
        <Item>
          <div className="title">Velog</div>
        </Item>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
