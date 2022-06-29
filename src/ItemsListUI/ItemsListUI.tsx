import { styled } from "@mui/system";

const OneTaskDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: '50px',
  maxWidth: "500px",
  fontFamily: "cursive",
  color: "#6203FC",
  fontSize: "22px",
}));

const AllTasksDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: 'column',
  gap: '20px',
}));

export { OneTaskDiv, AllTasksDiv };
