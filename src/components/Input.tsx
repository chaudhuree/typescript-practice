import { FC, ChangeEvent, useState } from "react";

const Input: FC = () => {
  const [country, setCountry] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>Input</h1>

      <input
        type="text"
        placeholder="input your name"
        onChange={handleChange}
      />
      <h2>{country}</h2>
    </div>
  );
};

export default Input;
