import styled from 'styled-components';
import bgImage from '../../images/cardBgImage.png';

const CardsListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const CardsList = styled.ul`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const CardItem = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 284px;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${bgImage}) no-repeat center 28px;
    background-size: cover fixed;
    pointer-events: none;
  }

  &:hover {
    background-image: linear-gradient(
      to right bottom,
      rgba(72, 68, 181, 1) 24%,
      rgba(103, 99, 236, 1) 47%,
      rgba(102, 135, 219, 1) 64%,
      rgba(120, 151, 255, 1) 80%,
      rgba(166, 187, 255, 1) 87%
    );
  }
`;

const LogoWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Logo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const styles = {
  CardsListWrap,
  CardsList,
  CardItem,
  LogoWrap,
  Logo,
};

export default styles;
