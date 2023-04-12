import React, { FC } from "react";
import { Product, User } from "./components";

const App: FC = () => {
  return (
    <div>
      <User />
      <br />
      <Product />
    </div>
  );
};

export default App;
