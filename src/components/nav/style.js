import { styled } from "@mui/system";

export const FloatingNav = styled("nav")({
  background: "rgba(0,0,0,0.3)",
  width: "max-content",
  padding: "0.7rem 0.7rem",
  zIndex: 2,
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "2rem",
  display: "flex",
  gap: "0.8rem",
  borderRadius: "3rem",
  backdropFilter: "blur(15px)",

  "& a": {
    background: "transparent",
    padding: "0.9rem",
    borderRadius: "50%",
    display: "flex",
    color: "var(--color-light)",
    fontSize: "1.1rem",
    "&:hover": {
      background: "rgba(0,0,0,0.3)",
      color: "var(--color-white)",
    },

    "&.active": {
      background: "var(--color-bg)",
      color: "var(--color-primary)",
    },
  },
});
