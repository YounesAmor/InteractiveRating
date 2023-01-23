import React, { Component } from "react";
class Button extends Component {
  state = {};
  render() {
    return (
      <button
        className="border rounded-full text-lightGrey text-center w-10 h-10 hover:bg-orange hover:text-white focus:bg-lightGrey focus:text-white"
        onClick={(event) => this.props.onClick(event)}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
