import React from 'react'
import './ContentNav.css'
import back from '../Icons/back.svg'
import { NavLink } from './Nav.js'

const ContentNav = () => {
  return (
    <div>
        <div className="navbarContent">
            <div className="arrow">
                <img src={back} alt="" />
            </div>
            <div className="links-flex">
                <NavLink className={'nav-links'} to ='/' activeStyle>
                    Test
                </NavLink>
                <NavLink className={'nav-links'} to ='/lecture' activeStyle>
                    Lecture
                </NavLink>
                <NavLink className={'nav-links'} to ='/sstudy' activeStyle>
                    Study material
                </NavLink>
                <NavLink className={'nav-links'} to ='/list' activeStyle>
                    List of student and teacher
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ContentNav