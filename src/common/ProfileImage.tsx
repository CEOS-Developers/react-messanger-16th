import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  outline: ${({ selected }: { selected?: boolean }) =>
    selected ? "1px solid black" : "none"};
`;
