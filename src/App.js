import { useState } from "react";

import List from "./components/List";
import ListInput from "./components/ListInput";
import ListComputation from "./components/ListComputation";

function App() {

  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  return (
    <div style={{ border: "1px solid red" }}>

      <center><h1>Compare List</h1></center>

      <List listTitle="FIRST LIST" listItems={firstList} />
      <List listTitle="SECOND LIST" listItems={secondList} />

      <ListInput setFirstList={setFirstList} setSecondList={setSecondList} />
      
      <ListComputation firstList={firstList} secondList={secondList} />

    </div>
  );
}

export default App;
