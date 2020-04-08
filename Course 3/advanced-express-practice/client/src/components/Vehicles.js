import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Vehicles(props) {
console.log(props.vehicles)
  return (
    <CollapsableMapper data={props.vehicles} path="vehicle" field="year" field1="make" field2="model"  />
  );
}
export default Vehicles;
