import { FC } from "react";

export enum HairColor {
  Blonde = "wow it is so cool on you",
  Black = "cool i like your hair style",
  Pink = "you looks better now with pink",
}
interface Props {
  name: string;
  hairColor: HairColor;
}
const EnumFunctionality: FC<Props> = ({ name, hairColor }) => {
  return (
    <div>
      <h1
        style={{
          borderBottom: "3px solid gray",
          display: "inline-block",
          width: "150px",
        }}
      >
        Enum
      </h1>
      <h2>hi ,{name}</h2>
      <h2>{hairColor}</h2>
    </div>
  );
};

export default EnumFunctionality;
