import React from 'react'
import './Button.scss'

const Button = ({
  text,
  className,
  onClick,
  backico = '',
  type = 'button',
  icons}) => {

    const backIconSrc =
        backico == 'bwh' ? "/images/arrow-back-wh.svg" :
        backico == 'bbh' ? "/images/arrow-back.svg" : null

    const nextIconSrc =
        backico == 'fwh' ? "/images/arrow-front-wh.svg" :
        backico == 'fbh' ? "/images/arrow-front.svg" : null

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}>
      {
        backIconSrc && <img src={backIconSrc} />
      }
      {text}
      {icons && <img src='/images/arrow-front-wh.svg'/>}
      {
        nextIconSrc && <img src={nextIconSrc} />
      }
    </button>
  )
}

export default Button