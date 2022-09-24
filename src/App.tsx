import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";
import { PersonFc } from "./components/PersonFC";
import Input from "./components/Input";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="chaudhuree" age={27} />
      <PersonFc age={28} name="sOhan" />
      <Input />
    </div>
  );
};
export default App;
