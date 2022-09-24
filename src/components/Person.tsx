import * as React from "react";
interface Props {
  name: string;
  age: number;
  isMarried?: boolean;
  getName?: (name: string) => string;
}
const Person = ({ name, age, isMarried, getName }: Props) => {
  return (
    <div>
      <h1>Person</h1>

      <h3>{name}</h3>
      <h3>{age}</h3>
    </div>
  );
};
export default Person;
