import React from "react";
export default class ShowValue extends React.Component {

	render() {
		console.log(this.props.hendelval1)
		return (<div className="Contain">
			<div>
				<input onChange={this.props.hendelval1} placeholder="sdsds" />
				<br />
				<br />
				<input onChange={this.props.hendelval2} />
				<br />
				<br />
				<button onClick={this.props.ButtonState}  >Показать</button>
			</div>
			<div>
				<h2>{this.props.val1}</h2>
				<h2>{this.props.val2}</h2>
			</div>
		</div>)
	}
}