import React, { createContext, FC } from "react";
import "./App.css";
import { Person } from "./componenets/Person";
import { HairColor } from "./Enum";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "batuhan",
    age: 23,
    country: "Turkey",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Batuhan"
          age={23}
          email="batuhanngulmez@gmail.com"
          hairColor={HairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
