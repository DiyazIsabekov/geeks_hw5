import React from "react";
import style from './ShouldStyle.module.css'

export default class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {

    if (this.state.count >= 5) {
      return false
    }
    else if (this.state.count <= 0) {
      return false
    }
    else return true
  }
  render() {
    const ClickIncrement = () => this.setState({ count: this.state.count + 1 })
    const Clickdecrement = () => this.setState({ count: this.state.count - 1 })


    return (<div className={style.contain}>
      <div className={style.btnContain}>
        <button onClick={Clickdecrement}>Minus</button>
        <div className={style.count}> {this.state.count} </div>
        <button onClick={ClickIncrement}>Plus</button>
      </div>
    </div>)
  }
}