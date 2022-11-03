import React from "react";
import { Component } from "react";
// import { TiTimes } from "react-icons/ti";
import { TiTimes, BsCheck } from "react-icons/all";

class DeleteIcon extends Component {
	render() {
		return <TiTimes onClick={this.props.handleClick} />;
	}
}

export default DeleteIcon;
