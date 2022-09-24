import * as React from "react";
interface Props {
  name: string;
  age: number;
  isMarried?: boolean;
  getName?: (name: string) => string;
}
const Person = (props: Props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default Person;
