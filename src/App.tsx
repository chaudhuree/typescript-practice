import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";
import {PersonFc} from "./components/PersonFC";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="chaudhuree" age={27} />
      <PersonFc age={28} name="sOhan" />
    </div>
  );
};
export default App;
