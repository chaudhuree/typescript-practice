import { FC } from "react";

const Type: FC = () => {
  type NameType = "chaudhuree" | "kabir";
  const name: NameType = "chaudhuree";
  return (
    <div>
      <h1
        style={{
          borderBottom: "3px solid gray",
          display: "inline-block",
          width: "150px",
        }}
      >
        Type
      </h1>
      <h3>{name}</h3>
    </div>
  );
};

export default Type;
