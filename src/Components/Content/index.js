import React from 'react'
import './Content.css'
const Content = ({pageName}) => {
  return (
    <div className='content-main'>
      <div className="select">
        <p className='title-select'>Select</p>
        <span className='line'></span>
        <div class="select-dropdown" >
          <select>
            <option value="0">Past {pageName}</option>
            <option value="1">Current {pageName}</option>
          </select>
        </div>
      </div>
      <button className='btn-content'>
        {pageName === 'test' ? `Schedule new test`: `Schedule lecture`}
      </button>
    </div>
  )
}

export default Content