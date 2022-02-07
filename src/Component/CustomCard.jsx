import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme }) => ({
  zIndex: 100,
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  background: theme.palette.primary.dark,
}));

export default CustomCard;
