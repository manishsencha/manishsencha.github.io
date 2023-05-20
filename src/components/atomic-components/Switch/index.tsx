import React from "react";

interface Switchprops {
  checked: boolean;
  toggle: () => void;
}

const Switch: React.FC<Switchprops> = ({ checked, toggle }) => {
  return (
    <div className="toggle-switch-container">
      <input
        type="checkbox"
        id="toggle-switch"
        name="toggle-switch"
        className="sr-only"
        checked={checked}
        onChange={() => toggle()}
      />
      <label htmlFor="toggle-switch"></label>
    </div>
  );
};

export default Switch;
