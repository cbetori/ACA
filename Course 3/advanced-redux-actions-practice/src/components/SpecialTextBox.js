import React from 'react';
import {connect} from "react-redux";
import {setSpecialText} from "../actions/actions";

function SpecialTextBox(props) {
  return (
      <div>
        Enter Special Text:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

export default (SpecialTextBox);
