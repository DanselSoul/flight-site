import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar"
import Lounge from "../components/Lounge/Lounge"

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text'>Hello home</div>
        </div>
    )
  }
}
