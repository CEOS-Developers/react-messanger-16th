import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/userState';
import SearchIcon from '../../image/emoji/SearchIcon';
import { useEffect, useState } from 'react';
import { IUser } from '../../state/userState';

const ProfilePage = () => {
  const userList = useRecoilValue(userState);
  const [newUserList, setNewUserList] = useState<IUser[]>(userList);
  const [inputValue, setInputValue] = useState<string>('');
  const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);

  const onHandleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.currentTarget.value;
    setInputValue(text);
  };

  useEffect(() => {
    let tempList = userList.filter((user) => {
      if (user.username.includes(inputValue)) {
        return user;
      }
    });
    setNewUserList(tempList);
  }, [inputValue]);

  const onClickSearchIcon = () => {
    setIsSearchIconClicked(!isSearchIconClicked);
  };

  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start" style={{ padding: '24px 20px 0px 20px' }}>
        <span style={{ fontWeight: '800', fontSize: '18px' }}>친구</span>
        <SearchIcon onClick={onClickSearchIcon} />
      </Row>
      {isSearchIconClicked ? (
        <Column>
          <input
            onChange={onHandleInputText}
            autoFocus
            style={{
              width: '100%',
              marginTop: '20px',
              marginBottom: '12px',
              fontSize: '12px',
              padding: '4px',
              border: 'none',
              backgroundColor: 'rgb(228, 227, 227)',
              borderRadius: '4px',
            }}
            value={inputValue}
          />
          <>
            {newUserList.map((user) => {
              return <UserBar key={user.userId} username={user.username} statusMessage={user.introMessage} />;
            })}
          </>
        </Column>
      ) : (
        <Column>
          <UserBar key="0" username="장영준" statusMessage="내가 미래다!" />
          <hr style={{ height: '0.5px', backgroundColor: '#bcbaba', border: 'none' }} />
          <>
            {userList.map((user) => {
              return <UserBar key={user.userId} username={user.username} statusMessage={user.introMessage} />;
            })}
          </>
        </Column>
      )}
    </>
  );
};

export default ProfilePage;
