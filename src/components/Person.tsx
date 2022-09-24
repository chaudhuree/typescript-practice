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
        <h5>hi</h5>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default Person;
