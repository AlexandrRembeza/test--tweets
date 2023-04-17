import { sortValues } from './sortValuesObj';
const { all, follow, followings } = sortValues;

export const sortUsers = (users, myFollowings, filter) => {
  switch (filter) {
    case all.value:
      return users;
    case follow.value:
      return users.filter(({ id }) => !myFollowings.includes(id));
    case followings.value:
      return users.filter(({ id }) => myFollowings.includes(id));
    default:
      return users;
  }
};
