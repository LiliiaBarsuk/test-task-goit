import styled from '@emotion/styled';
import bgimage from '../../images/picture1.png';

export const CardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 460px;
  width: 380px;
  padding: 28px 36px 36px 36px;
  background-image: url(${bgimage}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  background-repeat: no-repeat;
  background-size: 300px 168px, 100% 100%;
  background-position: 36px 28px, 0 0;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  
`;

export const LogoStyled = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 26px;
  ::before {
    position: absolute;
    left: 0;
    top: 214px;
    content: "";
    display: block;
    width: 380px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
  };
`;

export const AvatarFrameStyled = styled.div`
  background-color: #5736A3;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 174px;
  left: 150px;
  border-radius: 50%;
  border: 8px solid #EBD8FF;
  `;

export const AvatarStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%; 
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 0px -2.19582px 4.39163px #AE7BE3, 0px 0px 3.29372px #FBF8FF;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserInfoStyled = styled.p`
text-align: center;
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
color: #EBD8FF;
`;

export const ButtonStyled = styled.button`
  padding: 14px 28px;
  width: 196px;
  background: ${props => props.isFollow ? '#5CD3A8' : '#EBD8FF'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
`;

