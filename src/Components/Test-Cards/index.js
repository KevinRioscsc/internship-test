import React from 'react'
import './TestCards.css'

const TestCards = ({type, description, date, time}) => {
  return (
    <div>
        <div className="card">
            <div className="card-content">
                <div className="title-card">
                    <h2 className='test'>{type}</h2>
                </div>
                <p className='description'>{description}</p>
                <div className="time-flex">
                    <div className="endtime">
                        <p className='date'>End date</p>
                        <p className='exact'>{date}</p>
                    </div>
                    <div className="endtime">
                        <p className='date'>End time</p>
                        <p className='exact'>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestCards