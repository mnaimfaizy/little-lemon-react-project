import React from 'react'

const Button = ({title}) => {
  return (
    <button className="mt-5 bg-primary text-black font-bold hover:bg-secondary  py-2 px-6 rounded-2xl">{title}</button>
  )
}

export default Button