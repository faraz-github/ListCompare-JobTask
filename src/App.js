import { useState } from "react";

import { Button, Container, Paper, Typography } from "@mui/material";

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
    <Container>
      <Paper variant="outlined" sx={{ my: 1, p: 1, display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">List Computation App</Typography>
      </Paper>
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
          : <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
            <ListComputation firstList={firstList} secondList={secondList} />
          </Paper>

      }
      <Button variant="contained" color="secondary" fullWidth onClick={changeScreen}>{screen === "List" ? "Compute" : "Edit List"}</Button>
    </Container>
  );
}

export default App;
