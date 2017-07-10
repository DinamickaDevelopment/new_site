import React, {Component} from 'react'  
import { Scrollbars } from 'react-custom-scrollbars';
import {
    MobileNav, 
    OurServices, 
    OurProjects, 
    OurTeam, 
    Testimonials, 
    LatestPosts, 
    ContactUs
} from './'

export default class HomeMobile extends Component { 
    componenDidMount() {
        
    }
    render() { 
        let {h, w} = this.props
        return (
            <div className="home-mobile" id="outer-container">
            <Scrollbars style={{height: h, width: w}}>
                <MobileNav />
                <div id="page-wrap">
                    <section className="mobile-homepage-section intro-section" id="home" style={{height: h}}> 
                        <div className="home-intro__container_mobile">
                            <div className="home-intro__container_title_mobile">
                                <h1>Dinamicka Development</h1>
                                <h3>Tiny little small description</h3>
                            </div> 
                        </div>
                        <a className="scroll-down-btn scroll-btn-mobile" href="#what-we-do">
                            <div>Scroll to learn more</div>
                            <div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
                        </a>
                    </section>
                    <section className="mobile-homepage-section what-we-do-section" id="what-we-do">
                        <OurServices h={window.innerWidth >= 768 ? h/3 : 240}/>
                    </section>
                    <section className="mobile-homepage-section projects-section" id="our-projects">
                        <OurProjects h={window.innerWidth >= 768 ? h/3 : 240} />
                    </section> 
                    <section className="mobile-homepage-section team-section" id="team">
                        <OurTeam />
                    </section>
                    <section className="mobile-homepage-section clients-section" id="what-clients-say">
                        <Testimonials />
                    </section> 
                    <section className="mobile-homepage-section latest-posts-section" id="latest-posts">
                        <LatestPosts />
                    </section> 
                    <section className="mobile-homepage-section contact-us-section" id="contact-us">
                        <ContactUs />
                    </section>
                </div>
                </Scrollbars>
            </div>
        )
    }
} 