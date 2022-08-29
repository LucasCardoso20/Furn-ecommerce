import Link from 'next/link'
import React from 'react'
import { MdClose } from 'react-icons/md'

const MobileMenu = ({ data, menuToggle, changeMenu }) => {
    return (
        <div className={`${menuToggle ? 'mobile-menu-component open-menu' : 'mobile-menu-component'} `}>
            <div className="close-menu">
                {menuToggle && <MdClose onClick={() => changeMenu(false)} />}
            </div>
            
            <ul className="mobile-menu-container">

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
        </div>

    )
}

export default MobileMenu