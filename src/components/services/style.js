import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const ServicesContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "3rem",

  "@media(max-width:1024px)": {
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },

  "@media(max-width:600px)": {
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
  },
});

export const Service = styled("div")({
  background: "var(--color-bg-variant)",
  borderRadius: " 0 0 2rem 2rem",
  border: "1px solid var(--color-primary)",
  height: "fit-content",
  transition: "var(--transition)",

  "&:hover": {
    background: "transparent",
    borderColor: "var(--color-primary-variant)",
    cursor: "default",
  },

  "@media(max-width:1024px)": {
    height: "auto",
  },
});

export const ServiceHead = styled("div")({
  background: "var(--color-primary)",
  padding: "2rem",
  borderRadius: " 0 0 2rem 2rem",
  boxShadow: "0 2rem 1rem rgba(0,0,0,0.1)",

  "& h3": {
    color: "var(--color-bg)",
    fontSize: "1rem",
    textAlign: "center",
  },
});

export const ServiceList = styled("ul")({
  padding: "2rem",

  "& li": {
    display: "flex",
    gap: "1rem",
    marginBottom: "0.8rem",

    "& > svg ": {
      color: "var(--color-primary)",
      marginTop: "2px",
      fontSize: "1.6rem",
    },
  },

  "& p": {
    fontSize: "0.9rem",
  },
});
