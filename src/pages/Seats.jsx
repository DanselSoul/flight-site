import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar"

function YourSeat(props){
  return (
    <h1>Your seats: {props.num}</h1>
  )
}

export default class Seats extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <div className='text'>
                <h1>Seats</h1>
                <YourSeat num="27-B"/>
                <YourSeat num="2-A"/>
                <YourSeat num="28-D"/>
            </div>
        </div>
    )
  }
}
