import { PrimaryButton, StyledButton } from "../../GlobalStyles";
import {
  BtnContainer,
  PortfolioContainer,
  PortfolioImgContainer,
  PortfolioItem,
} from "./style";
import IMG1 from "../../assets/ToDoList.png";
import IMG2 from "../../assets/Gallery.png";
import IMG3 from "../../assets/moviesApp.png";
import IMG4 from "../../assets/ProShop.png";
import IMG5 from "../../assets/Ar.png";
import IMG6 from "../../assets/myservices.png";

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
          <h3>ToDoList</h3>

          <BtnContainer>
            <StyledButton
              href="https://github.com/MutazHusam/React-Training-eighth-Class-Task"
              target="_blank"
            >
              Github
            </StyledButton>
            <PrimaryButton
              href="https://to-do-list-sandy-three.vercel.app/"
              target="_blank"
            >
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG2} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>Gallery App</h3>

          <BtnContainer>
            <StyledButton
              href="https://github.com/MutazHusam/GalleryApp"
              target="_blank"
            >
              Github
            </StyledButton>
            <PrimaryButton
              href="https://gallery-app-three.vercel.app/"
              target="_blank"
            >
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG3} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>Movies App</h3>

          <BtnContainer>
            <StyledButton
              href="https://github.com/MutazHusam/Movies-App"
              target="_blank"
            >
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
          <h3>ProShop App</h3>

          <BtnContainer>
            <StyledButton
              href="https://github.com/MutazHusam/ProShop"
              target="_blank"
            >
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
          <h3>Arabic WebSite</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://mz9.netlify.app/" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImgContainer>
            <img src={IMG6} alt="IMG1" />
          </PortfolioImgContainer>
          <h3>My Services WebSite</h3>

          <BtnContainer>
            <StyledButton href="https://github.com/MutazHusam" target="_blank">
              Github
            </StyledButton>
            <PrimaryButton href="https://myservices1.netlify.app/" target="_blank">
              Live Demo
            </PrimaryButton>
          </BtnContainer>
        </PortfolioItem>
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;
