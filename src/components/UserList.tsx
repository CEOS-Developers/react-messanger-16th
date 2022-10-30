import { useRecoilState } from "recoil";
import { userInformationState } from "../store/atom";
import styled from "styled-components";
import { UserInformation } from "../interfaces/interface";
import SingleUser from "./SingleUser";
import { Link } from "react-router-dom";

const UserList = () => {
  const userData = useRecoilState(userInformationState);

  return (
    <ItemWrapper>
      {userData[0].map((user: UserInformation, index: number) =>
        index > 0 ? (
          <Link to={`/room/${user.userid - 1}`}>
            <SingleUser key={user.userid} {...user} />
          </Link>
        ) : (
          <div key={user.userid}></div>
          /* me, 본인, friends */
        )
      )}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
`;

export default UserList;
