import React from 'react'
import Content from '../Content'
import LectureCards from '../Lecture-cards'
import { dataLecture } from '../../data'

const Lecture = () => {
  return (
    <div>
        <Content pageName={'lectures'}/>
        {
            dataLecture.map((item, index) => {
                return <LectureCards topic={item.topic} date={item.date} time= {item.time}/>
            })
        }
        
    </div>
  )
}

export default Lecture