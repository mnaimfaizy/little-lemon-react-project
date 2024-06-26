import React from 'react'

const Button = ({title}) => {
  return (
    <button className="mt-5 bg-primary text-secondary font-bold hover:bg-secondary hover:text-white py-2 px-4 rounded-2xl">{title}</button>
  )
}

export default Button