import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;

  :hover {
    background-color: whitesmoke;
  }

  .title {
    color: black;
  }

  .content {
    color: gray;
    font-size: 0.8rem;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  outline: ${({ selected }: { selected?: boolean }) =>
    selected ? "1px solid black" : "none"};
`;
