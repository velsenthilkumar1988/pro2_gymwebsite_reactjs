import React, { useEffect, useRef } from 'react'
import "../../styles/header.css";
import logoImg from "../../assets/img/extended.png";
const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classlist.add('sticky__header')
      }else{
        headerRef.current.classlist.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  },[]);

  const handleClick = e=> {
    e.preventDefault()
    const targetAtt = e.target.getAttribute('href');//e.targetAttribute("href");
    const location = document.querySelector(targetAtt).offsetTop;

    window.scrollTo({
      top : location - 80,
      left : 0,
    })
  }
  
  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
  
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
  ];
  return (
    <header className='header' ref={headerRef}>
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
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                  {
                    nav__links.map(item =>(
                      <li className='nav_item'><a onClick={handleClick} href={item.path}>{item.display}</a></li>
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
