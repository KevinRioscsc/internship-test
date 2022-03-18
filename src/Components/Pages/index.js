import React from 'react'
import Content from '../Content'
import TestCards from '../Test-Cards'
import { dataTest } from '../../data'

const Test = () => {
  return (
    <div>
        <Content pageName={'test'}/>
        {
            dataTest.map((item, index) => {
                return <TestCards type={item.type} description = {item.description} date={item.date} time={item.time} />
            })
        }
        
    </div>
  )
}

export default Test