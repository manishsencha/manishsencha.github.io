import React from "react";
import { RingLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="min-vh flex items-center justify-center">
      <RingLoader className="loading-spinner"/>
    </div>
  );
};

export default Loader;
