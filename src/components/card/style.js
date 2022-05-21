import { styled } from "@mui/system";
export const SingleCard = styled("div")({
  background: "var(--color-bg-variant)",
  border: "1px solid transparent",
  borderRadius: "1rem",
  padding: "2rem",
  textAlign: "center",
  transition: "var(--transition)",

  "&:hover": {
    background: "transparent",
    borderColor: "var(--color-bg-variant)",
    cursor: "default",
  },

  "& :first-child": {
    color: "var(--color-primary)",
    fontSize: "1.4rem",
    marginBottom: "1rem",
  },

  "& h5": {
    fontSize: "0.95rem",
  },

  "& small": {
    fontSize: "0.67rem",
    color: "var(--color-light)",
    fontWeight: "bold",
  },
});
