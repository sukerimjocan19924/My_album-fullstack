import React from 'react'
import './Footer.scss'
import footerMenu from "@/constants/footerMenu.js"

const Footer = () => {
  return (
    <footer>
      <p>© 2026 MemorialAlbum · by HSR</p>
      <div className="footer-menus">
        {footerMenu.map((item, index) => (
          <a key={index} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
