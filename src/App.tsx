import React, { FC, createContext } from "react";
import "./App.css";
import Person from "./components/Person";
import { PersonFc } from "./components/PersonFC";
import Input from "./components/Input";
import EnumFunctionality, { HairColor } from "./components/EnumFunctionality";
import Type from "./components/Type";

//interface
interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}
//contextApi
const AppContext = createContext<AppContextInterface | null>(null);
// const AppContext = createContext<any>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "sOhan",
    age: 27,
    country: "Bangladesh",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="chaudhuree" age={27} />
        <PersonFc age={28} name="sOhan" />
        <Input />
        <EnumFunctionality name="kabir" hairColor={HairColor.Black} />
        <Type />
      </div>
    </AppContext.Provider>
  );
};
export default App;
