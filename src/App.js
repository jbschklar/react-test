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
			edit: false,
		};
		this.editTask = this.editTask.bind(this);
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

	editTask(e) {
		const submitIcon = e.target.nextSibling;
		console.log(submitIcon);
		// const value = e.target.closest("li").textContent;
		// console.log(value);
		// return <input type="text" value={value} />;
		this.setState({
			tasks: this.state.tasks,
			edit: true,
		});
		console.log(this.state);
	}

	submitEdit = (e) => {};

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
					editFn={this.editTask}
					submitFn={this.submitEdit}
				/>
			</div>
		);
	}
}

export default App;
