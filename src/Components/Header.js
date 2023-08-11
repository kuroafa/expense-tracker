import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h2 className='font-bold text-3xl m-2  border-s-2 p-2 text-white'>{title}</h2>
    </div>
  )
}

export default Header
