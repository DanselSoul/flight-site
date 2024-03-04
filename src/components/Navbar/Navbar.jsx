import React, {useState} from "react"
import { Link } from "react-router-dom";


import {SiConsul} from "react-icons/si"
import {BsPhoneVibrate} from "react-icons/bs"
import {AiOutlineGlobal} from "react-icons/ai"
import {CgMenuGridO} from "react-icons/cg"

import logo from '../../assets/logo.png'

const Navbar = () => {

  const [active, setActive] = useState('navBarMenu')

  const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }

  const hideNavBar = ()=>{
    setActive('navBarMenu')
  }

  return(
    <div className="navBar flex">
      <div className="navBarOne flex">

        <div className="icon">
          <SiConsul/>
        </div>

        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate/> Support</li>
          <li className="flex"> <AiOutlineGlobal/> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>

      <div className="navBarTwo flex">

        <div className="logoDiv">
          <img src={logo} alt="logo" className="logo"/> 
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={hideNavBar} className="listItem"><Link to="/">Home</Link></li>
            <li onClick={hideNavBar} className="listItem"><Link to="/about">About</Link></li>
            <li onClick={hideNavBar} className="listItem"><Link to="/offers">Offers</Link></li>
            <li onClick={hideNavBar} className="listItem"><Link to="/seats">Seats</Link></li>
            <li onClick={hideNavBar} className="listItem"><Link to="/destination">Destinations</Link></li>
          </ul>

          <button onClick={hideNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">
          Contact
        </button>

        <div onClick={showNavBar} className="toggleIcon"> 
          <CgMenuGridO/>
        </div>

      </div>

    </div>
  )
}

export default Navbar