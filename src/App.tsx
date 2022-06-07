import React, { FC } from "react";
import "./App.css";
import { Person, HairColor } from "./componenets/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person
        name="Batuhan"
        age={23}
        email="batuhanngulmez@gmail.com"
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default App;
