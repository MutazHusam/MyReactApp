import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";
export const ContactContainer = styled(Container)({
  width: "58%",
  display: "grid",
  gridTemplateColumns: "30% 58%",
  gap: "12%",
  "@media(max-width:1024px)": {
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },

  "@media(max-width:600px)": {
    width: "var(--container-width-sm)",
  },
});

export const ContactOptions = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const ContactOption = styled("div")({
  background: "var(--color-bg-variant)",
  padding: "1.2rem",
  borderRadius: "1.2rem",
  textAlign: "center",
  border: "1px solid transparent",
  transition: "var(--transition)",
  "&:hover": {
    background: "transparent",
    borderColor: "var(--color-primary-variant)",
  },

  "& > svg ": {
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
  },

  "& a": {
    marginTop: "0.7rem",
    fontSize: "0.8rem",
    display: "inline-block",
    fontWeight: "bold",
  },

  "& h5": {
    color: "var(--color-light)",
  },
});

export const MyForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});
