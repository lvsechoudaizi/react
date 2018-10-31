import React, { Component } from 'react'

export default class Home extends Component {

  renderTodayClue = () => {
    return(
      <div className="hl-home-title">
        今日线索
      </div>
    )
  }

  render() {
    return (
      <div className="hl-home-content">
        <div className="hl-home-today-clue">

        </div>
      </div>
    )
  }
}
