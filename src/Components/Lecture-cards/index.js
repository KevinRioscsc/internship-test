import React from 'react'
import './lectureCards.css'
const LectureCards = ({topic, date, time}) => {
  return (
    <div>
        <div className="lectureCards">
            <div className="lecture-flex">
                <div className="topic flex">
                    <p className='lectTitle m0'>Topic:</p>
                    <p className='typo m0'>{topic}</p>
                </div>
                <div className="dateLect flex">
                    <p className='timelect m0'>Start date - End date</p>
                    <p className='dates m0'>{date}</p>
                </div>
                <div className="timeLect flex">
                    <p className='timelect m0'>Start time - End time</p>
                    <p className='dates m0'>{time}</p>
                </div>
                <p className='records m0'>View recordings</p>
            </div>
        </div>
    </div>
  )
}

export default LectureCards