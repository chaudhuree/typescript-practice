import React, {FC} from "react";
import "./App.css";
import Person from "./components/Person";
import {PersonFc} from "./components/PersonFC";
import Input from "./components/Input";
import EnumFunctionality, {HairColor} from "./components/EnumFunctionality";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="chaudhuree" age={27} />
      <PersonFc age={28} name="sOhan" />
      <Input />
      <EnumFunctionality name="kabir" hairColor={HairColor.Black}/>
    </div>
  );
};
export default App;
