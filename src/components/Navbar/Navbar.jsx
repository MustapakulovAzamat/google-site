import { NavLink } from "react-router-dom"
import { useState } from "react"

import googleIcon from '../../assets/main-images/main-google-icon.svg'
import searchIcon from '../../assets/main-images/main-search-icon.svg'
import questionsIcon from '../../assets/main-images/main-questions-icon.svg'
import shopIcon from '../../assets/main-images/main-shop-icon.svg'
import loginIcon from '../../assets/main-images/main-login-icon.svg'
import burgerMenu from '../../assets/header-icon/header-burger-menu.png'

import '../../assets/style/core.sass'
import './navbar.sass'
export const Navbar = () => {
    const [show, setShow] = useState()
  return (
    <>
        <section className="blue_message">
            <div className="container">
                <span>Free shipping. Simple returns. Holiday shopping has never been easier.</span>
            </div>
        </section>
        <header className="header">
            <nav className="header__nav">
                <ul className={`header__nav__lists ${show ? 'active' : ''}`}>
                    <li>
                        <NavLink to='/'><img src={googleIcon} alt="google-icon" /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Phones</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Earbuds</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Watches</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Smart Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Laptops</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Subscriptions</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Offers</NavLink>
                    </li>
                </ul>

                <ul className="header__nav__icons">
                    <li>
                        <NavLink to='/'><img src={searchIcon} alt="search" /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><img src={questionsIcon} alt="questions" /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><img src={shopIcon} alt="shop" /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><img src={loginIcon} alt="login" /></NavLink>
                    </li>
                </ul>

                <button className="header__nav__button" onClick={() => setShow(!show)}><img src={burgerMenu} alt="burger-menu" /></button>
            </nav>
        </header>
    </>
  )
}
