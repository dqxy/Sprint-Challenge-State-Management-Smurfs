import React from "react";
import { connect } from "react-redux";
import { addMember } from "../actions";

class AddSmurf extends React.Component {
  state = {
    newMember: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddMember = e => {
    e.preventDefault();
    // update the redux members store
    this.props.addMember(this.state.newMember,this.state.age,this.state.height);
    this.setState({
      newMember: '',
      age: '',
      height: ''
  });  
  };

  render() {
    return (
      <React.Fragment>
        <form id="data-form">
        <input
          type="text"
          name="newMember"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChanges}
          placeholder="Age"
        />
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.handleChanges}
          placeholder="Height"
        />
        <button onClick={this.handleAddMember}>Add smurf</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.members
  };
};

export default connect(
  mapStateToProps,
  { addMember }
)(AddSmurf);
