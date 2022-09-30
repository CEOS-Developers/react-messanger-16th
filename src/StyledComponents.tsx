import styled from "styled-components";

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? "50%" : "100%"};
`;

export { ProfileImage };
