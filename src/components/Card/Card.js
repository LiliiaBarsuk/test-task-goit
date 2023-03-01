import logo from '../../images/Logo.png';
import avatar from '../../images/Hansel.png';
import { UserInfoContainer, AvatarStyled, ButtonStyled, CardContainer, LogoStyled, UserInfoStyled, AvatarFrameStyled, TextContainer } from './Card.styled';
import { useEffect, useState } from 'react';


export const Card = () => {
  const [followers, setFollowers] = useState(JSON.parse(localStorage.getItem("followState"))?.followers ?? 100500);
  const [isFollow, setIsFollow] = useState(JSON.parse(localStorage.getItem("followState"))?.isFollow ?? false)

  const handleClick = () => {
    setIsFollow(!isFollow);
    if(!isFollow) {setFollowers(prevState => prevState + 1)};
    if(isFollow) {setFollowers(prevState => prevState - 1)};
  }
  
  const followersNumber = () => {
    return followers.toLocaleString('en-Us')
  };

  useEffect(() => {
    const followState = {
        followers,
        isFollow
    }

    localStorage.setItem("followState", JSON.stringify(followState));
  }, [followers, isFollow]);

    return (
        <CardContainer>
            <LogoStyled src={logo} alt="Logo"/>
            <UserInfoContainer>
                <AvatarFrameStyled>
                    <AvatarStyled src={avatar} alt="Avatar"/>
                </AvatarFrameStyled>
                <TextContainer>
                    <UserInfoStyled>777 tweets</UserInfoStyled>
                    <UserInfoStyled>{followersNumber()} followers</UserInfoStyled>
                </TextContainer>
            </UserInfoContainer>
            <ButtonStyled isFollow={isFollow} type='button' onClick={handleClick}>{isFollow ? 'Following' : 'Follow'}</ButtonStyled>
        </CardContainer>
    )
}