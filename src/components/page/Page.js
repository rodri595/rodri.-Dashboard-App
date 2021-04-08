import React from "react";

const Page = ({ children, menuOpen, darkMode }) => {
  return (
    <body
      className={`${darkMode ? "dark" : ""} ${menuOpen ? "no-scroll" : ""}`}
    >
      <div className={`page ${menuOpen ? "toggle" : ""}`}>{children}</div>
    </body>
  );
};

export default Page;
