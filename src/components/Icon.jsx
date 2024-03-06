import React from 'react'

export const ArrowLeft = ({className,...props}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={` h-auto ${className}`}
    {...props}
  >
    <path fill="black" d="m10 17 5-5-5-5z" />
  </svg>
  )
}

export const ArrowRight = ({className,...props}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={` h-auto ${className}`}
    {...props}
  >
    <path fill="black" d="m14 7-5 5 5 5z" />
  </svg>
  )
}
