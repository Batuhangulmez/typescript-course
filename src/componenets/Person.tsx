import { ChangeEvent, FC, useState } from "react";
import { User } from "../Interface";

export const Person: FC<User> = ({ name, email, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1> {email} </h1>
      <input placeholder="Write down your country.." onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  );
};
