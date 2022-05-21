import { PrimaryButton } from "../../GlobalStyles";
import {
  AboutCards,
  AboutContainer,
  AboutImgContainer,
  AboutMeContent,
  AboutMeSection,
} from "./style";
import ME from "../../assets/me-about.jpg";
import Card from "../card";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutMeSection>
          <AboutImgContainer>
            <img src={ME} alt="" />
          </AboutImgContainer>
        </AboutMeSection>
        <AboutMeContent>
          <AboutCards>
            <Card
              TargetIcon={FaAward}
              title="Experience"
              subTitle="3+ Years Working"
            />
            <Card
              TargetIcon={FiUsers}
              title="Clients"
              subTitle="300+ Worldwide"
            />
            <Card
              TargetIcon={VscFolderLibrary}
              title="Experience"
              subTitle="80+ Completed"
            />
          </AboutCards>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            reprehenderit quidem quia deserunt, molestiae, eligendi amet repel
            Iat molestias quos totam.
          </p>
          <PrimaryButton href="#contact"> Let's Talk</PrimaryButton>
        </AboutMeContent>
      </AboutContainer>
    </section>
  );
};

export default About;
