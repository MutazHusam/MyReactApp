import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const AboutContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "35% 50%",
  gap: "15%",

  "@media(max-width:1024px)": {
    gridTemplateColumns: "1fr",
    gap: "0",
  },

});
export const AboutMeSection = styled("div")({
  width: "100%",
  aspectRatio: "1/1",
  borderRadius: "2rem",
  // background: 'liner-gradient(45deg,transparent,var(--color-primary),transparent)',
  background: "var(--color-primary)",
  display: "grid",
  placeItems: "center",

  "@media(max-width:1024px)": {
    width: "50%",
    margin: "2rem auto 4rem",
  },


  "@media(max-width:600px)": {
    width: "65%",
    margin: "0 auto 3rem",
  },
});

export const AboutImgContainer = styled("div")({
  borderRadius: "2rem",
  overflow: "hidden",
  transform: "rotate(10deg)",
  transition: "var(--transition)",
  "&:hover": {
    transform: "rotate(0)",
  },
});

export const AboutMeContent = styled("div")({


    "@media(max-width:600px)": {

        textAlign:'center,'
    
    
      },


  "& p": {
    fontSize: "0.95rem",
    margin: "2rem 0 2.6rem",
    color: "var(--color-light)",

    "@media(max-width:1024px)": {
      margin: "1rem 0 1.5rem",
    },

    "@media(max-width:600px)": {
        margin: "1.5rem 0",
      },

  },
});

export const AboutCards = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.5rem",
  "@media(max-width:600px)": {
    gridTemplateColumns: "1fr 1fr",
  gap: "1rem",


  },

});
