import React from 'react'
import './Landing.scss'
import Button from '@/components/ui/Button'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <div className="inner">
        <img src="/images/landing-img.png" alt="img" />

        <div className="landing-wrap">
          <div className="t-wrap">
            <p>하루를 남기고, 마음을 채우다</p>
            <h2><img src="/images/logo.svg" alt="logo" /></h2>
            <p>추억을 기록하고 간직하는 - albumary</p>
          </div>

          <NavLink>
            <Button text='시작하기' className='intro' icons={true}/>
          </NavLink>
        </div>
     
      </div>
    </section>
  )
}

export default Landing