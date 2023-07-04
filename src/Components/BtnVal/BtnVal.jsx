import React from "react";
export default class BtnVal extends React.Component {

    render() {

        return (
            <div className="Contain">
                <div>
                    <input onChange={this.props.handleVal1} placeholder="Type smth" />

                    <input onChange={this.props.handleVal2} />

                    <button onClick={this.props.ButtonState} >Показать</button>
                </div>
            </div>)
    }
}