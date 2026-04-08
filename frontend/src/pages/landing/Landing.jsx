import React from 'react'
import './Landing.scss'
import Button from '@/components/ui/Button'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing' style={{ backgroundImage: "url(/images/bg_landing_scrapbook_texture.png)" }}>
      <div className="inner">
        <img src="/images/landing-img.png" alt="img" className='intro-img'/>

        <div className="landing-wrap">
          <div className="t-wrap">
            <p>하루를 남기고, 마음을 채우다</p>
            <h2><img src="/images/logo.svg" alt="logo" /></h2>
          </div>

          <NavLink to="/login">
            <Button text='시작하기' className='intro' icons={true}/>
          </NavLink>
        </div>
     
      </div>
    </section>
  )
}

export default Landing