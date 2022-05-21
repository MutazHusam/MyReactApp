import {
  ContactContainer,
  ContactOptions,
  ContactOption,
  MyForm,
} from "./style";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { SubmitButton } from "../../GlobalStyles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnufy3k",
        "template_7v2ub4f",
        form.current,
        "3vSdOz9XgMPiBbzrt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>4Mutaz@gmail.com</h5>
            <a href="mailto:4Mutaz@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </ContactOption>

          <ContactOption>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Mutaz Husam</h5>
            <a href="https://m.me/111mz" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </ContactOption>

          <ContactOption>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+970599108334</h5>
            <a
              href="https://wa.me/qr/DN7ISVP4CDY5C1"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </ContactOption>
        </ContactOptions>

        <MyForm ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message "
            required
          ></textarea>
          <SubmitButton type=" submit">Send Message</SubmitButton>
        </MyForm>
      </ContactContainer>
    </section>
  );
};

export default Contact;
