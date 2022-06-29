import { Button, styled } from "@mui/material";
import { TextField } from "@mui/material";

const MainDiv = styled("div")(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}));

const AddItemTextField = styled(TextField)(() => ({
    width: '300px',
    marginTop: '20px',
}));

const AddItemButton = styled(Button)(() => ({
    width: '300px',
    marginTop: '20px',
    textTransform: 'capitalize',
    fontSize: '15px',
    fontWeight: 'bold',
}));

export { MainDiv, AddItemTextField, AddItemButton };
