import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  outline: ${({ selected }: { selected?: boolean }) =>
    selected ? "1px solid black" : "none"};
`;
