import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const MainDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  minWidth: "300px",
  color: "white",
  marginTop: "30px",
}));

const HeaderText = styled(Typography)(() => ({
  fontFamily: "cursive",
  color: "#6203FC",
}));

export { MainDiv, HeaderText };
