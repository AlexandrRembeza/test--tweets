import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  line-height: 1.22;
  padding: 0;
  background-color: ${({ isLastPage }) => (isLastPage ? '#c9c9c9' : '#5cd3a8')};
  color: #373737;
  border: none;
  outline: none;
  border-radius: 10.3108px;
  box-shadow: ${({ isLastPage }) =>
    !isLastPage ? '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)' : 'none'};
  cursor: ${({ isLastPage }) => (!isLastPage ? 'pointer' : 'auto')};
  transition: scale 100ms ease-in-out, background-color 100ms ease-in-out;

  &:hover {
    transform: ${({ isLastPage }) => (!isLastPage ? 'scale(1.03)' : 'scale(1)')};
  }
`;

const styles = {
  ButtonWrap,
  Button,
};

export default styles;
