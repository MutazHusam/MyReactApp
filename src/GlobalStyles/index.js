import { styled } from "@mui/system";
import { borders } from "@mui/system";

export const Container = styled("div")({
  width: "var(--container-width-lg)",
  margin: "0 auto",
});

export const StyledButton = styled("a")({
  width: "max-content",
  display: "inline-block",
  color: "var(--color-primary)",
  padding: " 0.75rem 1.2rem",
  borderRadius: "0.4rem",
  cursor: "pointer",
  border: "1px solid var(--color-primary)",
  transition: "var(--transition)",
  "&:hover": {
    color: "var(--color-bg)",
    background: "var(--color-white)",
    borderColor: "transparent",
  },
});

export const PrimaryButton = styled(StyledButton)({
  color: "var(--color-bg)",
  background: "var(--color-primary)",
});

export const SubmitButton = styled("button")({
  // '${StyledButton}',

  width: "max-content",
  display: "inline-block",
  color: "var(--color-primary)",
  padding: " 0.75rem 1.2rem",
  borderRadius: "0.4rem",
  cursor: "pointer",
  border: "1px solid var(--color-primary)",
  transition: "var(--transition)",
  "&:hover": {
    color: "var(--color-bg)",
    background: "var(--color-white)",
    borderColor: "transparent",
  },

  color: "var(--color-bg)",
  background: "var(--color-primary)",
});

export const StyledH5 = styled("h5")({
  color: "var(--color-light)",
});
