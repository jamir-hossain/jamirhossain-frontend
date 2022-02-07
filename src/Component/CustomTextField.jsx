import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    position: "relative",
    transform: "none",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: theme.palette.primary.dark,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
    borderColor: "orange",
  },
  "& .MuiOutlinedInput-input": {
    position: "relative",
    transform: "none",
    height: "1.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    background: "#fff",
  },
  "& .MuiSelect-select.MuiSelect-outlined": {
    display: "inline-flex",
    alignItems: "center",
    height: "1.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    borderColor: "orange",
  },
  "& .MuiOutlinedInput-notchedOutline legend": {
    width: 0,
  },
  "& fieldset": {
    borderColor: "orange",
  },
}));

export default CustomTextField;
