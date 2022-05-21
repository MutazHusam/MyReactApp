import {
  MyFooter,
  FooterLogo,
  FooterList,
  FooterSocial,
  FooterCopyRight,
} from "./style";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <MyFooter>
      <FooterLogo href="#">MutazHusam</FooterLogo>
      <FooterList>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </FooterList>
      <FooterSocial>
        <a href="https://www.facebook.com/111mz">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/000.mz/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/mo3tazhosam">
          <BsTwitter />
        </a>
      </FooterSocial>
      <FooterCopyRight>
        <small>&copy; MutazHusam All rights reserved To Mz Team</small>
      </FooterCopyRight>
    </MyFooter>
  );
};

export default Footer;
