import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const TestimonialsContainer = styled(Container)({
  width: "40%",

  "@media(max-width:1024px)": {
    width: "60%",
  },

  "@media(max-width:600px)": {
    width: "var(--container-width-sm)",
  },
});

export const TestimonialsItem = styled("div")({
  background: "var(--color-bg-variant)",
  textAlign: "center",
  padding: "2rem",
  borderRadius: "2rem",
  userSelect: "none",
  "& small": {
    color: "var(--color-light)",
    fontWeight: "300",
    display: "block",
    width: "80%",
    margin: "0.8rem auto 0",
    textAlign: "justify",

    "@media(max-width:600px)": {
      width: "var(--container-width-sm)",
    },
  },
});

export const TestimonialsImgContainer = styled("div")({
  width: "4rem",
  aspectRatio: "1/1",
  overflow: "hidden",
  borderRadius: "50%",
  border: "0.5rem solid var(--color-primary-variant)",
  margin: "0 auto 1rem",
});