import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 18px;
  line-height: 1.2;
  margin: 20px 0px 0px 160px;
  color: #df0d0d;
  background-color: #ffffff;
  border: 2px solid #df0d0d;
  border-radius: 10px;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #df0d0d;
    color: #ffffff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

const styles = { BackLink };

export default styles;
