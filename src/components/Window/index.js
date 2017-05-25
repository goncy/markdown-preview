import React from 'react'

import './Window.css'

const Window = ({
  title = 'Untitled document',
  textColor = 'near-white',
  bgColor = 'near-black',
  borderColor = 'mid-gray',
  titleColor = 'gray',
  children
}) => (
  <div className={`center br2 Window`}>
    <header className={`f6 code bg-${bgColor} ${titleColor} br2 br--top mv0 pv2 ph3 tc bb b--${borderColor}`}>
      <div className='flex absolute'>
        <div className='br-100 bg-red action-button' />
        <div className='br-100 bg-yellow action-button' />
        <div className='br-100 bg-green action-button' />
      </div>
      <span>
        {title}
      </span>
    </header>
    <main className={`ph2 pv1 bg-${bgColor} br2 br--bottom ${textColor} code`}>
      {children}
    </main>
  </div>
)

export default Window
