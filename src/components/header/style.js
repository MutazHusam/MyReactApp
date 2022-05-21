import { styled } from "@mui/system";

import { Container } from "../../GlobalStyles/index";

export const HeaderContainer = styled("header")({
  height: "100vh",
  paddingTop: "7rem",
  overflow: "hidden",

  "@media(max-width:1024px)": {
    height: "68vh",
  },

  "@media(max-width:600px)": {
    height: "100vh",
  },
});

export const HeadContainer = styled(Container)({
  textAlign: "center",
  height: "100%",
  position: "relative",

  //   ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
  //     background:'#f00',
  //   }
});

export const BtnContainer = styled("div")({
  marginTop: "2.5rem",
  display: "flex",
  gap: "1.2rem",
  justifyContent: "center",
});

export const HeaderSocialsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
  position: "absolute",
  left: 0,
  bottom: "3rem",
  "&::after": {
    content: '""',
    width: "1px",
    height: "2rem",
    background: "var(--color-primary)",
  },

  "@media(max-width:600px)": {
    display: "none",
  },
});

export const HeaderImgContainer = styled("div")({
  background: "linear-gradient(var(--color-primary),transparent)",
  width: "22rem",
  height: "30rem",
  position: "absolute",
  left: "calc(50%-11rem)",
  marginTop: "4rem",
  borderRadius: "12rem 12rem 0 0",
  overflow: "hidden",
  padding: "5rem 1.5rem 1.5rem 1.5rem",
});

export const ScrollDown = styled("div")({
  position: "absolute",
  right: "-2.3rem",
  bottom: "5rem",
  transform: "rotate(90deg)",
  fontWeight: "300",
  fontSize: "0.9rem",

  "@media(max-width:600px)": {
    display: "none",
  },
});
