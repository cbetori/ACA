import React from "react";
import {connect} from "react-redux";

function Profiles(props) {
  const userDivs = props.users.map((user,i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName}
        <a href="#"> View </a>
      </div>);
  });
  return (   
    <div>{userDivs}</div>
  );
}

export default connect(function (state) {
  return {users: state.users};
})(Profiles);


