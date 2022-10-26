import { useRecoilValue } from 'recoil';
import { friendsState } from '../states/atoms/friends';
import { userState } from '../states/atoms/user';
import { IUser } from '../states/interface';

const useUser = () => {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);

  const getUserById = (id: number): IUser => {
    if (id === 0) {
      return user;
    } else {
      return friends.filter((friend) => friend.userId === id)[0];
    }
  };

  const getUsersByUserIdList = (userIdList: number[]): IUser[] => {
    return userIdList.map((id) => getUserById(id));
  };

  return { getUserById, getUsersByUserIdList };
};

export default useUser;
