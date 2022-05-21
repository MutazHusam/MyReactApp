import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const ExperienceContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",

  "& > div ": {
    background: "var(--color-bg-variant)",
    padding: "2.4rem 5rem",
    borderRadius: "2rem",
    border: "1px solid transparent",
    transition: "var(--transition)",

    "& h3": {
      textAlign: "center",
      marginBottom: "2rem",
      color: "var(--color-primary)",
    },

    "&:hover": {
      background: "transparent",
      borderColor: "var(--color-primary-variant)",
      cursor: "default",
    },

    "@media(max-width:1024px)": {
      width: "80%",
      padding: "2rem",
      margin: "0 auto",
    },

    "@media(max-width:600px)": {
      width: "100%",
      padding: "2rem 1rem",
    },
  },

  "@media(max-width:1024px)": {
    gridTemplateColumns: "1fr",
  },

  "@media(max-width:600px)": {
    gap: "1rem",
  },
});

export const ExperienceDetails = styled("div")({
  display: "flex",
  gap: "1rem",

  "& > svg ": {
    color: "var(--color-primary)",
    marginTop: "6px",
  },
});

export const ExperienceContent = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "2rem",

  "@media(max-width:1024px)": {
    padding: "1rem",
  },
});
