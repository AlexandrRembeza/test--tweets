import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 40px;
  line-height: 1.2;
  padding: 10px 30px;
  color: #373737;
  background-color: #5cd3a8;
  border-radius: 10px;
`;

const LinkWrap = styled(TitleWrap)``;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 18px;
  line-height: 1.2;
  color: #ffffff;
  background-color: #08c37e;
  border-radius: 20px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: scale 100ms ease-in-out, background-color 100ms ease-in-out, color 100ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #a6fcdd;
    color: #373737;
  }
`;

const styles = { TitleWrap, Title, StyledLink, LinkWrap };

export default styles;
