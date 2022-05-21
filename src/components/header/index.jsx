import {
  StyledButton,
  PrimaryButton,
  StyledH5,
} from "../../GlobalStyles/index";
import {
  BtnContainer,
  HeadContainer,
  HeaderContainer,
  HeaderImgContainer,
  ScrollDown,
} from "./style";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/mz1.png";
import HeaderSocials from "./headerSocials";
const Header = () => {
  return (
    <HeaderContainer>
      <HeadContainer>
        <h5>Hello I'm</h5>
        <h1>Mutaz Husam</h1>
        <StyledH5>React.Js Developer</StyledH5>
        <BtnContainer>
          <StyledButton href={CV} download>
            Download CV
          </StyledButton>
          <PrimaryButton href="#contact"> Let's Talk</PrimaryButton>
        </BtnContainer>
        <div style={{ display: "flex", justifyContent:'center'}}>
          <HeaderSocials></HeaderSocials>
          <HeaderImgContainer>
            <img src={ME} alt="MyImage" />
          </HeaderImgContainer>
          <ScrollDown>
            <a href="#contact">Scroll Down</a>
          </ScrollDown>
        </div>
      </HeadContainer>
    </HeaderContainer>
  );
};

export default Header;
