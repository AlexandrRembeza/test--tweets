import { useLocation } from 'react-router-dom';
import React from 'react';
import styles from './Home.styled';
const { TitleWrap, Title, LinkWrap, StyledLink } = styles;

export const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <TitleWrap>
        <Title>HOME</Title>
      </TitleWrap>
      <LinkWrap>
        <StyledLink to="/tweets" state={{ from: location }}>
          Link to tweets
        </StyledLink>
      </LinkWrap>
    </>
  );
};
