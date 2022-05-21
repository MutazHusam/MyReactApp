import { PrimaryButton, StyledButton } from "../../GlobalStyles";
import {
  BtnContainer,
  PortfolioContainer,
  PortfolioImgContainer,
  PortfolioItem,
} from "./style";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer>
        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG1} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG2} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG3} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG4} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG5} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG6} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>This is a portfolio item title</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://github.com/MutazHusam" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;
