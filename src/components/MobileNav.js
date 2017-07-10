import React, {Component} from 'react' 
import {slide as Menu} from 'react-burger-menu' 
import './css/HomeMobile.css'

export default class MobileNav extends Component {
    render() {
        let styles = {
            bmBurgerButton: {
                position: 'absolute',
                width: '36px',
                height: '30px',
                right: '36px',
                top: '36px', 
                zIndex: 1000
            },
            bmBurgerBars: {
                background: '#000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#000'
            },
            bmMenu: {
                background: '#fff',
                paddingTop: '40px',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#fff'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        let {PUBLIC_URL} = process.env
        return (
            <div className="mobile-nav">   
                <div className="mobile-nav__logo-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <img src={PUBLIC_URL + "/images/new_logo.png"} alt="logo" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="mobile-nav__logo-text">
                                Dinamicka <br /> 
                                Development
                            </div>
                        </div>
                    </div>
                </div>
                <Menu right styles={styles}> 
                    {/*<div className="burger-logo">
                        <img src={PUBLIC_URL + "/images/new_logo.png"} alt="logo" />
                    </div> */}
                    <a href="#home" className="menu-item">HOME</a> 
                    <a href="#what-we-do" className="menu-item">WHAT WE DO</a>
                    <a href="#our-projects" className="menu-item">OUR PROJECTS</a>
                    <a href="#team" className="menu-item">OUR TEAM</a> 
                    <a href="#our-clients" className="menu-item">WHAT CLIENTS SAY</a> 
                    <a href="#latest-posts" className="menu-item">LATEST POSTS</a> 
                    <a href="#contact-us" className="menu-item">CONTACT US</a>
                </Menu>
            </div>
        )
    }
}