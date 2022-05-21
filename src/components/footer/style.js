import { styled } from "@mui/system";
import { Container } from "../../GlobalStyles";

export const MyFooter = styled("footer")({
  background: "var(--color-primary)",
  padding: "3rem 0",
  textAlign: "center",
  fontSize: "0.9rem",
  marginTop: "7rem",
  "& a": {
    color: "var(--color-bg)",
    marginTop: "6px",
  },
});
export const FooterLogo = styled("a")({
  fontSize: "2rem",
  fontWeight: "500",
  marginBottom: "2rem",
  display: "inline-block",
});

export const FooterList = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2rem",
  margin: "0 auto 3rem",

  // "@media(max-width:1024px)": {
  //   gridTemplateColumns: "1fr",
  //   gap: "2rem",
  // },

  "@media(max-width:600px)": {
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export const FooterSocial = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "4rem",

  "& a": {
    display: "flex",
    background: "var(--color-bg)",
    color: "var(--color-white)",
    padding: "0.8rem",
    borderRadius: "0.7rem",
    border: "1px solid transparent",

    "&:hover": {
      background: "transparent",
      color: "var(--color-bg)",
      borderColor: "var(--color-bg)",
    },
  },

  "@media(max-width:600px)": {
    marginBottom: "2.6rem",
  },
});

export const FooterCopyRight = styled("div")({
  marginBottom: "4rem",
  color: "var(--color-bg)",
});
