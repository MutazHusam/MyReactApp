import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceDetails,
} from "./style";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <ExperienceContainer>
        <div>
          <h3>Frontend Development</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </div>
        <div>
          <h3>BackEnd Development</h3>
          <ExperienceContent>
            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </div>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;
