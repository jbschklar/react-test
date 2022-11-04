/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const ListDisplay = (props) => {
	const { edit, id, editID, value } = props;
	if (edit && id === editID) {
		return <input type="text" placeholder={value} />;
	}
	return value;
};

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			editID: null,
		};
		this.editTask = this.editTask.bind(this);
	}

	editTask(e) {
		const editIcon = e.target.closest("svg");
		const submitIcon = editIcon.nextSibling;
		this.setState({
			edit: true,
			editID: e.target.closest("li").id,
		});
		editIcon.classList.add("hidden");
		submitIcon.classList.remove("hidden");
	}

	render() {
		const { tasks } = this.props;
		return (
			<ul>
				{tasks.map((task) => (
					<li key={task.id} id={task.id}>
						<ListDisplay
							value={task.value}
							edit={this.state.edit}
							id={task.id}
							editID={this.state.editID}
						/>
						<EditIcon
							editFn={this.editTask}
							submitFn={(e) => {
								this.props.submitFn(e);
								this.setState({
									edit: false,
									editID: null,
								});
							}}
						/>
						<DeleteIcon handleClick={this.props.onClick} />
					</li>
				))}
			</ul>
		);
	}
}
export default Overview;
