import React, { useState } from 'react'
import Logo from '../../assets/download.webp'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '../../utils.js/data'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <nav id="navigation-bar" className="nav">
      <div className="container nav-container">
        <div className="logo-container">
          <Image src={Logo} />
        </div>
        <ul className='menu-list'>
          {data.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <a>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="cart-and-menu-container">
          <div className="cart-icon">
            <MdOutlineShoppingBag />
            <span className='cart-number'>3</span>
          </div>

          <div className="menu-icon" onClick={()=> setMenuToggle(!menuToggle)}>
            <HiMenu />
          </div>
        </div>

        {menuToggle && <MobileMenu data={data} menuToggle={menuToggle} changeMenu={setMenuToggle}/>}

      </div>
    </nav>
  )
}

export default Navbar