import { styled } from "@mui/material";

const MainDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "300px",
  gap: "30px",
}));

const HeaderDiv = styled("div")(() => ({}));

const AddItemDiv = styled("div")(() => ({}));

const ItemsListDiv = styled("div")(() => ({}));

export { MainDiv, HeaderDiv, AddItemDiv, ItemsListDiv };
