import React from 'react';
import Card from '../Card';
import styles from './CardList.styled';
import logo from '../../images/logoGoIt.png';
const { CardsList, CardsListWrap, CardItem, LogoWrap, Logo } = styles;

export const CardList = ({ users, followings, onClick }) => {
  return (
    <CardsListWrap>
      <CardsList>
        {users.map(user => (
          <CardItem key={user.id}>
            <LogoWrap>
              <Logo src={logo} alt="LogGoIt" />
            </LogoWrap>
            <Card user={user} followings={followings} onClick={onClick} />
          </CardItem>
        ))}
      </CardsList>
    </CardsListWrap>
  );
};
