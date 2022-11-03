/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const ListDisplay = (props) => {
	const edit = props.edit;
	if (edit) {
		return <input type="text" />;
	}
	return props.value;
};

class Overview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { tasks } = this.props;
		const editField = <input type="text" />;
		// const listItems = tasks.map((task) => (
		// 	<li key={task.id} id={task.id}>
		// 		{!props.edit ? task.value : editField}
		// 		<DeleteIcon handleClick={props.onClick} />
		// 		<EditIcon editFn={props.editFn} submitFn={props.submitFn} />
		// 	</li>
		// ));
		// return <ul>{listItems}</ul>;
		return (
			<ul>
				{tasks.map((task) => (
					<li key={task.id} id={task.id}>
						<ListDisplay value={task.value} edit={this.props.edit} />
						<DeleteIcon handleClick={this.props.onClick} />
						<EditIcon
							editFn={this.props.editFn}
							submitFn={this.props.submitFn}
						/>
					</li>
				))}
			</ul>
		);
	}
}
export default Overview;
