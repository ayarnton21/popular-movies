import React from "react";

const Heading = ({ subHeading = false, text, className }) => (
  <div className={className}>
    {!subHeading && (
      <h1 className="py-6 text-2xl font-semibold text-gray-600 md:text-5xl">
        {text}
      </h1>
    )}
    {subHeading && (
      <h3 className="py-3 text-lg text-gray-600 md:text-2xl"> {text}</h3>
    )}
  </div>
);

export default Heading;
