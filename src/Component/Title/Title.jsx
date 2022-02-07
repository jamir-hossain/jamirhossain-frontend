import { styled } from "@mui/system";
import { H5 } from "../Typography";

const Title = styled(H5)(({ theme, afterWidth, afterHeight }) => ({
  "&::after": {
    content: '""',
    width: afterWidth || "100%",
    height: afterHeight || "2px",
    display: "block",
    marginTop: "7px",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default Title;
