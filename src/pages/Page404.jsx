import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom";

export default class Page404 extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <div className='text'>Page bot found. Go <Link to="/">HOME</Link></div>
        </div>
    )
  }
}