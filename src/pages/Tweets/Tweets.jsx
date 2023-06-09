import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import SortUsers from '../../components/SortUsers';
import utils from '../../utils';
import API from '../../service/api/users';
import useLocalStorage from '../../hooks/useLocaleStorage';
import styles from './Tweets.styled';
const { BackLink } = styles;
const { sortUsers, sortValues } = utils;

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [followings, setFollowings] = useLocalStorage();
  const [selectedOption, setSelectedOption] = useState(sortValues.all);
  const location = useLocation();
  const backLinkHref = location.state?.from || '/';

  let filteredUsers = sortUsers(users, followings, selectedOption.value);

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

  const updateUserFollowings = async (id, followers, subscription) => {
    setUsers(s =>
      s.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !subscription ? (user.followers += 1) : (user.followers -= 1),
        };
      })
    );
    if (!subscription) {
      setFollowings(s => [...s, id]);
      await API.updateUser(id, (followers += 1));
    } else {
      setFollowings(prevS => prevS.filter(el => el !== id));
      await API.updateUser(id, (followers -= 1));
    }
  };

  return (
    <>
      <SortUsers selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <BackLink to={backLinkHref}>Back to home</BackLink>
      <CardList
        users={filteredUsers}
        setUsers={setUsers}
        followings={followings}
        updateUserFollowings={updateUserFollowings}
      />
      {users.length > 0 && selectedOption.value === sortValues.all.value && (
        <LoadMoreBtn isLastPage={isLastPage} isLoading={isLoading} setPage={setPage} />
      )}
    </>
  );
};
