import React from "react";
import { connect } from "react-redux";
import AddSmurf from "./AddSmurf";

const DataList = props => {
  return (
    <>
    <AddSmurf/>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.data.map(d => <div class="data">Name: {d.name} <br/>Age: {d.age} Height: {d.height}</div>)
      )}
      
    </>
  );
  
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(DataList);
