import React from "react";

const WidthWrapper = ({ children, className }) => {
  return <div className={`${className} w-[80%] my-4 m-auto`}>{children}</div>;
};

export default WidthWrapper;
