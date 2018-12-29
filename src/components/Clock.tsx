import React, { Component } from "react";

const WEEKDAYS: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export default class extends Component<{}, { date: Date }> {
	timerId: any;

	constructor(props: any) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerId = setInterval(
		  () => this.tick(),
		  1000
		);
	  }

	  componentWillUnmount() {
		clearInterval(this.timerId);
	  }

	  tick() {
		this.setState({
		  date: new Date()
		});
	  }

	render() {
		return (
			<div className="Clock">
				<div className="weekday">{ WEEKDAYS[this.state.date.getDay()] }</div>
				<div className="time">{ this.state.date.toLocaleTimeString("en-GB") }</div>
				<div className="date">{ this.state.date.toISOString().substring(0, 10) }</div>
			</div>
		);
	}
}
