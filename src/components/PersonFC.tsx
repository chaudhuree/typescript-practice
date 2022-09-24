import { FC } from "react";

interface Props {
  name: string;
  age: number;
}
const PersonFc: FC<Props> = ({name,age}) => {
  return <div>
      <h1>PersonFC</h1>
      <h2>my name is {name}</h2>
      <p>and i am {age}years old</p>
      </div>;
};

export default PersonFc;
