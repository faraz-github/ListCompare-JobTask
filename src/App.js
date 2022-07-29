import { useState } from "react";

import { Button, Container, Paper, ThemeProvider } from "@mui/material";
import theme from "./MUI/theme";

import Header from "./components/Header";
import ListItems from "./components/ListItems";
import ListInput from "./components/ListInput";
import ListComputation from "./components/ListComputation";


function App() {

  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  const [screen, setScreen] = useState("List");

  const changeScreen = () => {
    if (screen === "List") {
      setScreen("Compute");
    } else {
      setScreen("List")
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        {
          screen === "List"
            ? <>
              <Paper elevation={0} sx={{ my: 1 }}>
                <ListItems listTitle="List A" listItems={firstList} />
                <ListItems listTitle="List B" listItems={secondList} />
              </Paper>

              <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
                <ListInput setFirstList={setFirstList} setSecondList={setSecondList} />
              </Paper>
            </>
            : <Paper elevation={0} sx={{ my: 1 }}>
              <ListComputation firstList={firstList} secondList={secondList} />
            </Paper>

        }
        <Button variant="contained" disableElevation color="secondary" fullWidth onClick={changeScreen}>{screen === "List" ? "Compute" : "Edit List"}</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
