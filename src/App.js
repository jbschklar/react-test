import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
	constructor() {
		super();
		this.state = {
			task: {
				value: "",
				id: uniqid(),
			},
			tasks: [],
		};
	}

	handleChange = (e) => {
		this.setState({
			task: {
				value: e.target.value,
				id: this.state.task.id,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				value: "",
				id: uniqid(),
			},
		});
	};

	deleteTask = (e) => {
		const targetID = e.target.closest("li").id;
		this.setState({
			tasks: this.state.tasks.filter((task) => task.id !== targetID),
		});
	};

	submitEdit = (e) => {
		const newValue = e.target.closest("li").firstChild.value;
		const targetID = e.target.closest("li").id;
		const editIcon = e.target.closest("div").firstChild;
		const submitIcon = editIcon.nextSibling;

		let newTasks = this.state.tasks.slice();
		newTasks.forEach((task) => {
			if (task.id === targetID) task.value = newValue ? newValue : task.value;
		});
		editIcon.classList.remove("hidden");
		submitIcon.classList.add("hidden");
		this.setState({
			tasks: newTasks,
		});
	};

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter task label:
						<input
							type="text"
							onChange={this.handleChange}
							value={this.state.task.value}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
				<Overview
					tasks={this.state.tasks}
					onClick={this.deleteTask}
					edit={this.state.edit}
					submitFn={this.submitEdit}
				/>
			</div>
		);
	}
}

export default App;
