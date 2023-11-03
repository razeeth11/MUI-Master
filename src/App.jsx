import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import "./App.css";
import {ResponsiveAppBar} from './AppBar'

function App() {
  return (
    <>
      <ResponsiveAppBar />
    </>
  );
}

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function Example() {
  return (
    <Grid container spacing={0} justifyContent="center" gap="10px">
      <Grid xs={12} sm={6} md={3}>
        <TextField
          sx={{ width: "100%" }}
          id="filled-basic"
          label="Filled"
          variant="filled"
        />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <TextField
          sx={{ width: "100%" }}
          id="filled-basic"
          label="Filled"
          variant="filled"
        />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
          {/* <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Filled"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Filled"
            variant="filled"
          /> */}
          <Div>{"This div's text looks like that of a button."}</Div>
      </Grid>
    </Grid>
  );
}

export default App;
