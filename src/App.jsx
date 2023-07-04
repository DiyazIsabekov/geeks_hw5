import React from "react";
import ShowValue from "./Components/ShowValue/ShowValue";
import BtnVal from "./Components/BtnVal/BtnVal";
import ShouldComponentUpdate from "./Components/ShouldCU/ShouldComponentUpdate";

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			val1: '',
			val2: '',
			ButtonState: false,
		}
	}

	render() {

		const handleVal1 = (e) => {
			this.setState({ val1: e.target.value })
			console.log(this.state.val1)
		}

		const handleVal2 = (e) => {
			this.setState({ val2: e.target.value })
			console.log(this.state.val2)
		}

		const ButtonState = () => {
			if (this.state.ButtonState === false) {

				this.setState({ ButtonState: true })
				console.log(this.state.ButtonState)
			}
			else if (this.state.ButtonState === true) {
				this.setState({ ButtonState: false })
				console.log(this.state.ButtonState)
			}
		}
		const ShoValueProps = {
			handleVal1: handleVal1,
			handleVal2: handleVal2,
			ButtonState: ButtonState,
			val1: this.state.val1,
			val2: this.state.val2
		}
		const BtnValProps = {
			handleVal1: handleVal1,
			handleVal2: handleVal2,
			ButtonState: ButtonState,
		}
		if (this.state.ButtonState === false) {

			return (<>

				<BtnVal {...BtnValProps} />
				<ShouldComponentUpdate />

			</>)
		}

		else {
			return (<>

				<ShowValue {...ShoValueProps} />
				<ShouldComponentUpdate />

			</>)
		}

	}
}


