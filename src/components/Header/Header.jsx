import React from 'react'
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
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
    <header>
      <div className="container">
        <div className="nav__wrapper">
          {/** ========= LOGO ========= */}
          <div className="logo">
            <div className="logo__img">
                <img src={logo} alt=''/>
                <h2>FitBody</h2>
            </div>
          </div>
          {/** ========= LOGO End ========= */}

          {/** ================== Navigation Menu =================== */}
          <div className="navigation">
              <ul className="menu">
                  {
                    nav__links.map(item =>(
                      <li className='nav_item'><a href={item.path}>{item.display}</a></li>
                    ))
                  }
              </ul>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
