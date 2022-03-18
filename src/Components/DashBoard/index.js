import React from 'react'
import './DashBoard.css'
import notification from '../Icons/notification.svg'
import email from '../Icons/email.svg'
import setting from '../Icons/setting.svg'
import profile from '../Icons/profile.svg'
const DashBoard = () => {
  return (
    <div>
        <div className="dashboard">
            <div className="dashboard-flex">
                <h1 className='title'>DashBoard</h1>
                <div className="icons-dash">
                    <img className='hover' src={notification} alt="" />
                    <img className='hover' src={email} alt="" />
                    <img className='hover' src={setting} alt="" />
                    <img className='hover' src={profile} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard