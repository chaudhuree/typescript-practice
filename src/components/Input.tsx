import { FC, ChangeEvent, useState } from "react";

const Input: FC = () => {
  const [country, setCountry] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1
        style={{
          borderBottom: "3px solid gray",
          display: "inline-block",
          width: "150px",
        }}
      >
        Input
      </h1>
      <div>
        <input
          style={{ padding: "6px 8px", border: "none", color: "red" }}
          type="text"
          placeholder="input your name"
          onChange={handleChange}
        />
      </div>
      <h2>{country}</h2>
    </div>
  );
};

export default Input;
