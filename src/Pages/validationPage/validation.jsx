import React from "react";
import Attention from "../../Components/validationComp/attention";
import Coin from "../../Components/validationComp/coin";
import { Navbar } from "../../layout/navbar/navba";
import "./style.css";

const Validation = () => {
  return (
    <div>
      <Navbar />
      <Attention />
      <Coin />
    </div>
  );
};

export default Validation;
