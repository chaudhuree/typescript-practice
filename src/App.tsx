import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";
import { PersonFc } from "./components/PersonFC";
import Input from "./components/Input";
import EnumFunctionality, { HairColor } from "./components/EnumFunctionality";
import Type from "./components/Type";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="chaudhuree" age={27} />
      <PersonFc age={28} name="sOhan" />
      <Input />
      <EnumFunctionality name="kabir" hairColor={HairColor.Black} />
      <Type />
    </div>
  );
};
export default App;
