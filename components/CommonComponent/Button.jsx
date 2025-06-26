import React from 'react'
import classNames from 'classnames'

const Button = ({
  text,
  bgColor = 'bg-black',
  textColor = 'text-white',
  hoverBgColor = 'hover:bg-opacity-80',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition duration-300',
        bgColor,
        textColor,
        hoverBgColor,
        className
      )}
    >
      {text}
    </button>
  )
}

export default Button
