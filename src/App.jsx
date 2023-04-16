import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import LoadMoreBtn from './components/LoadMoreBtn';
import API from './service/api/users';
import useLocalStorage from './hooks/useLocaleStorage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [followings, setFollowings] = useLocalStorage();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const newUsers = await API.getUsers(page);
      if (newUsers.length === 0) {
        setIsLastPage(true);
        setIsLoading(false);
        return;
      }
      setUsers(prevS => [...prevS, ...newUsers]);
      setIsLoading(false);
    })();
  }, [page]);

  const onFollowBtnClick = async (id, followers, subscription) => {
    if (!subscription) {
      setFollowings(prevS => [...prevS, id]);
      await API.updateUser(id, (followers += 1));
    } else {
      setFollowings(prevS => prevS.filter(el => el !== id));
      await API.updateUser(id, (followers -= 1));
    }
  };

  return (
    <>
      <CardList users={users} followings={followings} onClick={onFollowBtnClick} />
      {users.length > 0 && (
        <LoadMoreBtn isLastPage={isLastPage} isLoading={isLoading} setPage={setPage} />
      )}
    </>
  );
};

export default App;
