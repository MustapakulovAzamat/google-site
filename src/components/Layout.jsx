import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { NavLink } from "react-router-dom"

import twitterIcon from '../assets/footer-icons/footer-twitter-icon.svg'
import instagramIcon from '../assets/footer-icons/footer-instagram-icon.svg'
import facebookIcon from '../assets/footer-icons/footer-facebook-icon.svg'
import youtubeIcon from '../assets/footer-icons/footer-youtube-icon.svg'
import tiktokIcon from '../assets/footer-icons/footer-tiktok-icon.svg'
import usaIcon from '../assets/footer-icons/footer-usa-icon.svg'

export const Layout = () => {
  return (
    <>
        <Navbar/>

        <div className="googlePage">
          <Outlet/>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="footer__content">
              <div className="footer__content__lists">
                <ul>
                  <li><NavLink>Placing an order</NavLink></li>
                  <li><NavLink>Shipping options</NavLink></li>
                  <li><NavLink>Tracking a package</NavLink></li>
                  <li><NavLink>Country availability</NavLink></li>
                  <li><NavLink>Repairs</NavLink></li>
                  <li><NavLink>Installation</NavLink></li>
                  <li><NavLink>Ideas & Info</NavLink></li>
                </ul>
                <ul>
                  <li><NavLink>Help Center</NavLink></li>
                  <li><NavLink>Contact Us</NavLink></li>
                  <li><NavLink>Financing</NavLink></li>
                  <li><NavLink>Device recycling</NavLink></li>
                  <li><NavLink>Sustainability</NavLink></li>
                  <li><NavLink>Gift returns</NavLink></li>
                  <li><NavLink>Refurbished</NavLink></li>
                  <li><NavLink>Trade-in</NavLink></li>
                  <li><NavLink>Pixel for Business</NavLink></li>
                  <li><NavLink>Locations</NavLink></li>
                </ul>
              </div>
              <hr className="line"/>
              <div className="footer__content__lists-below">
                <ul className="footer_lists-below__img">
                  <li><NavLink><img src={twitterIcon} alt="twitter" /></NavLink></li>
                  <li><NavLink><img src={instagramIcon} alt="instagram" /></NavLink></li>
                  <li><NavLink><img src={facebookIcon} alt="facebook" /></NavLink></li>
                  <li><NavLink><img src={youtubeIcon} alt="youtube" /></NavLink></li>
                  <li><NavLink><img src={tiktokIcon} alt="tiktok" /></NavLink></li>
                </ul>
                <ul className="footer_lists-below__text">
                  <li><NavLink><img src={usaIcon} alt="USA"/>United States</NavLink></li>
                  <li><NavLink>Privacy</NavLink></li>
                  <li><NavLink>Google Nest Commitment to Privacy</NavLink></li>
                  <li><NavLink>Sales Terms</NavLink></li>
                  <li><NavLink>Terms of Service</NavLink></li>
                  <li><NavLink>Careers</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
