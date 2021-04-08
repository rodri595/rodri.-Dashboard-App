import React from "react";
import { Route } from "react-router-dom";

const NormalRoute = ({
  component: MyCustomComponent,
  isdarkmode,
  setisdarkmode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return (
          <MyCustomComponent
            {...props}
            isdarkmode={isdarkmode}
            setisdarkmode={setisdarkmode}
          />
        );
      }}
    />
  );
};

export default NormalRoute;
