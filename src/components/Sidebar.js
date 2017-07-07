import React, {Component} from 'react'; 
import './css/Sidebar.css'; 

export default class Sidebar extends Component {
	render() {
        const {PUBLIC_URL} = process.env; 
		return (
	        <div className="homepage__sidebar">
            <div className="homepage__sidebar_logo-container">
            <a href="#home">
                <img src={PUBLIC_URL + "/images/logo.png"} alt="Logo" />
                <div className="homepage__sidebar_logo-text">
                    DINAMICKA <br /> DEVELOPMENT
                </div>
            </a>
            </div>
            <div className="homepage__sidebar_nav">
                <div className="nav">
                    <ul className="nav__main">
                        <li>
                            <a href="#home">HOME</a>
                            <ul className="nav__main_home-options">
                                <li><a href="#what-we-do">WHAT WE DO</a></li>
                                <li><a href="#our-projects">OUR RECENT WORKS</a></li>
                                <li><a href="#team">OUR TEAM</a></li>
                                <li><a href="#our-clients">WHAT OUR CLIENTS SAY</a></li>
                                <li><a href="#latest-posts">LATEST POSTS</a></li>
                                <li><a href="#contact-us">CONTACT US</a></li>
                            </ul>
                        </li>
                        <li>OUR PROJECTS</li>
                        <li>HOW WE DO THINGS</li>
                        <li>BLOG</li>
                    </ul>
                </div>
            </div>
            <div className="homepage__sidebar_social">
                <div className="social-wrap">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
        </div>		
		)
	}
}