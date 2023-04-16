import SyncLoader from 'react-spinners/SyncLoader';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.styled';
const { CardStraightLine, UserAvatar, Ellipse, UserImage, UserInfo, FollowBtn } = styles;

export const Card = ({ user, followings, onClick }) => {
  const { user: name, avatar, tweets, followers, id } = user;

  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState(followings.includes(id));
  const [newFollowers, setNewFollowers] = useState(followers);
  const firstRender = useRef(true);
  const formatFollowers = newFollowers.toLocaleString().replace(/\s/g, ',');

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (subscription) return setNewFollowers(prevS => (prevS += 1));
    return setNewFollowers(s => (s -= 1));
  }, [subscription]);

  return (
    <>
      <CardStraightLine />
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
        onClick={async () => {
          setIsLoading(true);
          await onClick(id, followers, subscription);
          setSubscription(s => !s);
          setIsLoading(false);
        }}
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
