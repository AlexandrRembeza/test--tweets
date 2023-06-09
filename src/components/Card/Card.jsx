import SyncLoader from 'react-spinners/SyncLoader';
import React, { useState } from 'react';
import styles from './Card.styled';
const { UserAvatar, Ellipse, UserImage, UserInfo, FollowBtn } = styles;

export const Card = ({ user, followings, updateUserFollowings }) => {
  const { user: name, avatar, tweets, followers, id } = user;

  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState(followings.includes(id));
  const formatFollowers = followers.toLocaleString().replace(/\s/g, ',');

  const onFollowBtnClick = async () => {
    setIsLoading(true);
    await updateUserFollowings(id, followers, subscription);
    setSubscription(s => !s);
    setIsLoading(false);
  };

  return (
    <>
      <UserAvatar>
        <Ellipse>
          <UserImage src={avatar} alt={`${name} image`} />
        </Ellipse>
      </UserAvatar>
      <UserInfo>{tweets} tweets</UserInfo>
      <UserInfo>{formatFollowers} followers</UserInfo>
      <FollowBtn
        subscription={subscription}
        type="button"
        onClick={onFollowBtnClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <SyncLoader loading={isLoading} size={8} color="#000000" />
        ) : !subscription ? (
          'FOLLOW'
        ) : (
          'FOLLOWING'
        )}
      </FollowBtn>
    </>
  );
};
