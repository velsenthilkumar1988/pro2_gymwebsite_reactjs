import React from 'react'
import "../../styles/header.css";
import logoImg from "../../assets/img/extended.png";
const Header = () => {
  const nav__links = [
    {
      path: '#',
      display : 'Home'
    },
    {
      path: '#',
      display : 'Schedule'
    },
    {
      path: '#',
      display : 'Classes'
    },
    {
      path: '#',
      display : 'Princing'
    }
  ]
  return (
    <header className='header'>
      <div className="container">
        <div className="nav__wrapper">
          {/** ========= LOGO ========= */}
          <div className="logo">
            <div className="logo__img">
                <img src={logoImg} alt=''/>
                <h2>FitBody</h2>
            </div>
          </div>
          {/** ========= LOGO End ========= */}

          {/** ================== Navigation Menu Left =================== */}
          <div className="navigation">
              <ul className="menu">
                  {
                    nav__links.map(item =>(
                      <li className='nav_item'><a href={item.path}>{item.display}</a></li>
                    ))
                  }
              </ul>
          </div>
          {/** ================== Navigation Menu Left End =================== */}

          {/** ================== Navigation Menu Right =================== */}
          <div className="nav__right">
            <button className='register_btn'>Register</button>
            <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
            </span>
          </div>
          {/** ================== Navigation Menu Right End =================== */}

        </div>
      </div>
    </header>
  )
}

export default Header
