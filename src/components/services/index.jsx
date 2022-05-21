import { ServicesContainer, Service, ServiceHead, ServiceList } from "./style";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <ServicesContainer>
        <Service>
          <ServiceHead>
            <h3>UI/UX Design</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ServiceList>
        </Service>

        {/* 2222222 */}

        <Service>
          <ServiceHead>
            <h3>Web Development</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ServiceList>
        </Service>

        {/* 33333333333 */}

        <Service>
          <ServiceHead>
            <h3>Content Creation</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ServiceList>
        </Service>
      </ServicesContainer>
    </section>
  );
};

export default Services;
