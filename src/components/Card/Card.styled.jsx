import styled from 'styled-components';

const UserAvatar = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translate(-50%);
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

const Ellipse = styled.div`
  width: 62px;
  height: 62px;
  background-color: #5736a3;
  border-radius: 50%;
  overflow: hidden;
`;

const UserImage = styled.img`
  display: block;
  width: 62px;
  height: 62px;
`;

const UserInfo = styled.p`
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const FollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat-SemiBold', sans-serif;
  font-size: 18px;
  line-height: 1.22;
  padding: 0;
  margin: 26px auto 0px auto;
  background-color: ${({ subscription }) => (!subscription ? '#ebd8ff' : '#5CD3A8')};
  color: #373737;
  border: none;
  outline: none;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: scale 100ms ease-in-out, background-color 100ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #5cd3a8;
  }
`;

const styles = {
  UserAvatar,
  Ellipse,
  UserImage,
  UserInfo,
  FollowBtn,
};

export default styles;
