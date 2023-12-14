import '../assets/style/core.sass'
import './googlePage.sass'

import { NavLink } from 'react-router-dom'

import watchImg from '../assets/gadjets-images/gadjets-watch.png'
import pixel7proImg from '../assets/gadjets-images/gadjets-pixel-7-pro.png'
import pixel7Img from '../assets/gadjets-images/gadjets-pixel-7.png'
import airpods from '../assets/gadjets-images/gadjets-airpods.png'
import doorbellsImg from '../assets/gadjets-images/gadjets-doorbells.png'
import wifiImg from '../assets/gadjets-images/gadjets-wifi.png'

import nbaImg from '../assets/nba-images/nba-image.jpg'

import moreWatchImg from '../assets/gadjetsMore-images/gadjetsMore-watch.png'
import moreWifiImg from '../assets/gadjetsMore-images/gadjetsMore-wifi.png'
import moreDoorbellsImg from '../assets/gadjetsMore-images/gadjetsMore-doorbells.png'
import moreSmartphonesImg from '../assets/gadjetsMore-images/gadjetsMore-smartphone.png'
import moreHappyChineseImg from '../assets/gadjetsMore-images/gadjetsMore-happy-chinese.png'

import categoryCamerasImg from '../assets/category-images/category-cameras.png'
import categoryDoorbellsImg from '../assets/category-images/category-doorbells.png'
import categoryStreamingImg from '../assets/category-images/category-streaming.png'
import categoryPackagesImg from '../assets/category-images/category-packages.png'

import exploreAirpodsImg from '../assets/explore-images/explore-airpods.png'
import exploreWatchImg from '../assets/explore-images/explore-watch.png'

import puttingImg from '../assets/putting-images/putting-image.png'

import loginIcon from '../assets/login-images/login-icon.png'

export const GooglePage = () => {
  return (
    <div className='wrapper'>
        <main className='main'>
            <div className="container">
                <div className="main__content">
                    <div className="main__content__title">
                        <h1 className='core__title'>Inhale. Gift. Exhale.</h1>
                        <span>The gifts you need, stress-free. Shop the best of Google with ease.</span>
                    </div>
                    <div className="main__content__button">
                        <button className='core__button'><NavLink>Browse deals</NavLink></button>
                        <span>Browse the gift guide</span>
                    </div>
                </div>
            </div>
        </main>

        <section className='gadjets'>
            <div className="container">
                <div className="gadjets__content">
                    <h2>Sneak a peek. For you or for them.</h2>

                    <div className='gadjets__content__blocks'>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={watchImg} alt="watch" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={pixel7proImg} alt="pixel 7 pro" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={pixel7Img} alt="pixel 7" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={airpods} alt="airpods" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={doorbellsImg} alt="door bells" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                        <div className="gadjets__content__block">
                            <button className='gadjets__content__block-btn'>
                                <div>
                                    <span>New</span>
                                    <img src={wifiImg} alt="wifi" />
                                </div>
                            </button>
                            <h3>Google Pixel Watch</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='nba'>
            <div className="container">
                <div className="nba__content">

                    <div className='nba__content__img'>
                        <img src={nbaImg} alt="nba" />
                    </div>

                    <div className="nba__content__title">
                        <h4>This holiday season, Google Pixel is giving back.</h4>
                        <span>We`re contributing $1 million to the NBA Foundation to help advance HBCU students in their careers across STEM, sports, and media industries.</span>

                        <NavLink>Learn more</NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="gadjetsMore">
            <div className="container">
                <div className="gadjetsMore__content">
                    <div className="gadjetsMore__content__blocks">
                        <div className="gadjetsMore__content__block">
                            <div className="gadjetsMore__block__title">
                                <h4>Google Pixel Watch</h4>
                                <h5 className='core__title'>Help by Google. Health by Fitbit.</h5>
                                <button className='core__button'><NavLink>Learn more</NavLink></button>
                            </div>
                            <div className="gadjetsMore__block__img">
                                <img src={moreWatchImg} alt="watch" />
                            </div>
                        </div>
                        <div className="gadjetsMore__content__block">
                            <div className="gadjetsMore__block__title">
                                <h4>Nest Wifi Pro with Wi-Fi 6E</h4>
                                <h5 className='core__title'>The better way to WI-FI.</h5>
                                <button className='core__button'><NavLink>Learn more</NavLink></button>
                            </div>
                            <div className="gadjetsMore__block__img">
                                <img src={moreWifiImg} alt="wifi" />
                            </div>
                        </div>
                        <div className="gadjetsMore__content__block">
                            <div className="gadjetsMore__block__title">
                                <h4>Nest Doorbell (wired)</h4>
                                <h5 className='core__title'>Know more. No charning.</h5>
                                <button className='core__button'><NavLink>Learn more</NavLink></button>
                            </div>
                            <div className="gadjetsMore__block__img">
                                <img src={moreDoorbellsImg} alt="door bells" />
                            </div>
                        </div>
                    </div>
                
                    <div className="gadjetsMore__content__blocks-below">
                        <div className="gadjetsMore__content__block">
                            <div className="gadjetsMore__block__title">
                                <h4>Nest Cam</h4>
                                <h5 className='core__title'>One price for all things Pixel.</h5>
                                <button className='core__button'><NavLink>Learn more</NavLink></button>
                            </div>
                            <div className="gadjetsMore__block__img">
                                <img src={moreSmartphonesImg} alt="cam" />
                            </div>
                        </div>
                        <div className="gadjetsMore__content__block">
                            <div className="gadjetsMore__block__title">
                                <h4>Switch to Pixel</h4>
                                <h5 className='core__title'>Here`s what #TeamPixel has to say about it.</h5>
                                <button className='core__button'><NavLink>Learn more</NavLink></button>
                            </div>
                            <div className="gadjetsMore__block__img">
                                <img src={moreHappyChineseImg} alt="cam" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="category">
            <div className="container">
                <div className="category__content">
                    <h2>Shop by category.</h2>

                    <div className="category__content__blocks">
                        <div className="category__content__block">
                            <div className="category__block__img">
                                <img src={categoryCamerasImg} alt="cameras" />
                            </div>
                            <NavLink>Cameras</NavLink>
                        </div>
                        <div className="category__content__block">
                            <div className="category__block__img">
                                <img src={categoryDoorbellsImg} alt="door bells" />
                            </div>
                            <NavLink>Doorbells</NavLink>
                        </div>
                        <div className="category__content__block">
                            <div className="category__block__img">
                                <img src={categoryStreamingImg} alt="streaming" />
                            </div>
                            <NavLink>Streaming</NavLink>
                        </div>
                        <div className="category__content__block">
                            <div className="category__block__img">
                                <img src={categoryPackagesImg} alt="packages" />
                            </div>
                            <NavLink>Packages</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="explore">
            <div className="container">
                <div className="explore__blocks">
                    <div className="explore__block">
                        <div className="explore__block__title">
                            <h4>Explore Google products.</h4>
                            <h5 className='core__title'>Keep moving. Keep improving.</h5>
                            <button className='core__button'><NavLink>Explore watches</NavLink></button>
                        </div>
                        <div className="explore__block__img">
                            <img src={exploreWatchImg} alt="watch" />
                        </div>
                    </div>
                    <div className="explore__block">
                        <div className="explore__block__title">
                            <h4>Earbuds</h4>
                            <h5 className='core__title'>Great sound. <br/>All around.</h5>
                            <button className='core__button'><NavLink>Explore earbuds</NavLink></button>
                        </div>
                        <div className="explore__block__img">
                            <img src={exploreAirpodsImg} alt="watch" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='putting'>
            <div className="container">
                <div className="putting__content">
                    <div className="putting__content__img">
                        <img src={puttingImg} alt="put" />
                    </div>
                    <div className="putting__content__title">
                        <h6 className='core__title'>Putting sustainability to work.</h6>
                        <span>We`re committed to using recycled or renewable material in all Pixel, Nest, and Fitbit products by 2025.</span>
                        <button className='core__button'><NavLink>Learn more</NavLink></button>
                    </div>
                </div>
            </div>
        </section>

        <section className="login">
            <div className="container">
                <div className="login__content">
                    <div className="login__content__title-img">
                        <img src={loginIcon} alt="birka" />
                        <h2 className='core__title'>Keep me updated about devices, news, tips, and offers from Google Store.</h2>
                    </div>
                    <div className="login__content__button">
                        <button className='core__button'><NavLink>Log in and sign up</NavLink></button>
                        <NavLink className='login-link'>or enter email address</NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="info">
            <div className="container">
                <p>*</p>
                <span>
                    Here`s what you will pay for Pixel Pass: You`ll be required to finance your Pixel Pass purchase with 0% APR Google Store  full cost of your Pixel and Preferred Care is spread out over 24 monthly payments. The Google services included in Pixel Pass will be charged to your Google Store Financing account each month. Your Pixel Pass subscription will appear as two separate transactions every month on your Google Store Financing account. From $45/month: $648.68 at 0% APR with 24 equal monthly payments = $27.03/month plus Pixel Pass services (Google One 200 GB) = $17.97/month for a Total monthly payment = $45/month. Adjusted for taxes and shipping
                </span>
            </div>
        </section>
    </div>
  )
}
