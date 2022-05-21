import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { HeaderSocialsContainer } from './style';

const HeaderSocials = () => {
  return (
    <HeaderSocialsContainer>
        <a href="https://www.linkedin.com/"><LinkedInIcon/></a>
        <a href="https://github.com/"><GitHubIcon/></a>
        <a href="https://dribbble.com/"><SportsBasketballIcon/></a>

    </HeaderSocialsContainer>
  )
}

export default HeaderSocials