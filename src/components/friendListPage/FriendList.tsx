import { useRecoilState, useRecoilValue } from "recoil";
import { myInfoSelector, userInformationState } from "../../store/atom";
import styled from "styled-components";
import SingleUser from "../SingleUser";
import { UserInformation } from "../../interfaces/interface";
import { useCallback, useState } from "react";
import Modal from "../Modal";

const FriendList = () => {
  const userData = useRecoilState(userInformationState);
  const myInfo = useRecoilValue(myInfoSelector);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [userId, setUserId] = useState(0);

  const handleClickFriend = (userId: number) => {
    onClickToggleModal();
    setUserId(userId);
  };

  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const getStatusMessage = (userId: number) => {
    const filteredUser = userData[0].find((user) => user.userid === userId);
    return filteredUser!.statusMessage;
  };

  return (
    <>
      {" "}
      <ItemWrapper>
        {userData[0].map((user: UserInformation) =>
          user.userid === 0 ? (
            <div key={user.userid}>
              <h2>me</h2>
              <Line />
              <div
                key={user.userid}
                onClick={() => handleClickFriend(user.userid)}
              >
                <SingleUser
                  key={user.userid}
                  user={myInfo!}
                  isFriendPage={true}
                />
              </div>
              <h2>friends</h2>
              <Line />
            </div>
          ) : (
            <div
              key={user.userid}
              onClick={() => handleClickFriend(user.userid)}
            >
              <SingleUser key={user.userid} user={user} isFriendPage={true} />
            </div>
          )
        )}
      </ItemWrapper>
      <>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <ModalImg
              src={`${process.env.PUBLIC_URL}/images/${userId}.jpg`}
            ></ModalImg>
            <ModalMessage>
              <div>{getStatusMessage(userId)}</div>
            </ModalMessage>
          </Modal>
        )}
      </>
    </>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #ccc;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 90%;
`;

const ModalImg = styled.img`
  width: 100%;
  border-radius: 25px 25px 0px 0px;
`;

const ModalMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FriendList;
