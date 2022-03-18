import React from 'react'
import {logo, squares, calender,cash, chat, people,setting, student} from '../NavBarIcons'
import './NavBar.css'

const arr = [logo, squares, calender, cash, chat, people, setting, student]

const NavBar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-flex">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="icon">
                    <img src={squares} alt="" height={34}/>
                </div>
                <div className="icon">
                    <img src={student} alt="" height={34}/>
                </div>
                <div className="icon">
                    <img src={chat} alt="" height={34}/>
                </div>
                <div className="people">
                    <img src={people} alt=""  height={34}/>
                </div>
                <div className="icon">
                    <img src={cash} alt="" height={34}/>
                </div>
                <div className="icon">
                    <img src={calender} alt="" height={34}/>
                </div>
                <div className="icon">
                    <img src={setting} alt="" height={34}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar