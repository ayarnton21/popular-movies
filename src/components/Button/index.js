import cn from "classnames";
import React from "react";

const Button = ({ text, onClick, outline = false }) => (
  <button
    type="submit"
    onClick={onClick}
    className={cn("px-3 py-1 font-bold   rounded ", {
      "hover:bg-blue-500 bg-blue-400 text-white": !outline,
      "bg-white border-2 border-blue-400 hover:bg-blue-500 text-blue-400 hover:text-white":
        outline,
    })}
  >
    {text}
  </button>
);

export default Button;
