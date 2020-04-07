import React, { Component } from 'react'

export default class Time extends Component {

  constructor(props) {
    super(props);
    this.state = {
      localeTimeString: new  Date().toLocaleTimeString()
    };
    this.timeuot = null;
  }

  changeTime() {
    this.timeuot = setTimeout(() => (
      this.setState(() => (
        { localeTimeString: new  Date().toLocaleTimeString() }
      ), this.changeTime)
    ), 1000)
  }

  componentDidMount() {
    this.changeTime()
  }

  render() {
    return (
      <h2 className="header-time">{this.state.localeTimeString}</h2>
    )
  }

  componentWillUnmount() {
    this.timeuot && clearTimeout(this.timeuot)
  }
};
