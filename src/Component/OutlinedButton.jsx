import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  "&:hover": {
    color: "white",
    backgroundColor: "#3f51b5",
    borderColor: "#3f51b5",
  },
  "&:focus": {
    outline: "none",
  },
}));

const OutlinedButton = ({ children, ...props }) => {
  return (
    <StyledButton variant="outlined" {...props}>
      {children}
    </StyledButton>
  );
};

export default OutlinedButton;
