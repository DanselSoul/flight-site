import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar"

export default class Page404 extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <h1>Page not found. Go <Link to="/">HOME</Link></h1>
        </div>
    )
  }
}
