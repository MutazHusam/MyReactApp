import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const PortfolioContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "2.5rem",

  "@media(max-width:1024px)": {
    gridTemplateColumns: "1fr 1fr",
    gap: "1.2rem",
  },

  "@media(max-width:600px)": {
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },
});

export const PortfolioItem = styled("div")({
  background: "var(--color-bg-variant)",
  padding: "1.3rem",
  borderRadius: "2rem",
  border: "1px solid transparent",

  transition: "var(--transition)",

  "&:hover": {
    background: "transparent",
    borderColor: "var(--color-primary-variant)",
  },

  "& h3": {
    margin: "1.2rem 0 2rem",
  },
});

export const PortfolioImgContainer = styled("div")({
  borderRadius: "1.5rem",
  overflow: "hidden",
});

export const BtnContainer = styled("div")({
  marginBottom: "1rem",
  display: "flex",
  gap: "1rem",
});