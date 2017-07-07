import React, { Component } from 'react' 
import Slider from 'react-slick'  
import './css/Clients.css' 

// class PrevArrow extends Component {
//      render() {
//          return (<div className="arrow arrow-left COOL" onClick={this.props.onClick}><i className="fa fa-long-arrow-left" aria-hidden="true"></i></div>)
//      }
// } 

// class NextArrow extends Component {
//      render() {
//          return (<div className="arrow arrow-right" onClick={this.props.onClick}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>)
//      }
// }

export default class Testimonials extends Component {
    render() { 

        let {PUBLIC_URL} = process.env 
        let {h, offset} = this.props
        let settings = {
            arrows: true, 
            dots: true, 
            slidesToScroll: 1,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 250, 
            infinite: true

        }
        return (
            <div className="homepage__content_tab_block" style={{height: h}}> 
                <div className="row">
                    <div className="homepage__section-title">
                        <h2>WHAT OUR CLIENTS SAY</h2>
                        <hr />
                    </div>
                </div>  
                <div className="slider-aligner">
                <div className="clients-slider-container">
                <Slider>
                    <div> 
                    <div className="clients-slide-aligner">
                    <div className="clients-slide-underlay"></div> 
                    <div className="clients-slide">
                        <div className="clients-slide__text">
                            <div className="client-slide__text_content">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in”
                            </div>
                        </div>
                        <div className="clients-slide__persona">
                            <div className="clients-slide__persona_picture">
                                <img src={PUBLIC_URL + "/images/client.png"} alt="team member" />
                            </div>
                            <div className="clients-slide__persona_info">
                                <div className="clients-slide___name">NAME LASTNAME</div>
                                <div className="clients-slide__position">POSITION, COMPANY NAME</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div className="clients-slide-aligner">
                    <div className="clients-slide-underlay"></div>
                    <div className="clients-slide">
                        <div className="clients-slide__text">
                            <div className="client-slide__text_content">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in”
                            </div>
                        </div>
                        <div className="clients-slide__persona">
                            <div className="clients-slide__persona_picture">
                                <img src={PUBLIC_URL + "/images/client.png"} alt="team member" />
                            </div>
                            <div className="clients-slide__persona_info">
                                <div className="clients-slide___name">NAME LASTNAME</div>
                                <div className="clients-slide__position">POSITION, COMPANY NAME</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div className="clients-slide-aligner">
                    <div className="clients-slide-underlay"></div>
                    <div className="clients-slide">
                        <div className="clients-slide__text">
                            <div className="client-slide__text_content">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in”
                            </div>
                        </div>
                        <div className="clients-slide__persona">
                            <div className="clients-slide__persona_picture">
                                <img src={PUBLIC_URL + "/images/client.png"} alt="team member" />
                            </div>
                            <div className="clients-slide__persona_info">
                                <div className="clients-slide___name">NAME LASTNAME</div>
                                <div className="clients-slide__position">POSITION, COMPANY NAME</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>  
                    <div className="clients-slide-aligner">
                    <div className="clients-slide-underlay"></div>
                    <div className="clients-slide">
                        <div className="clients-slide__text">
                            <div className="client-slide__text_content">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in”
                            </div>
                        </div>
                        <div className="clients-slide__persona">
                            <div className="clients-slide__persona_picture">
                                <img src={PUBLIC_URL + "/images/client.png"} alt="team member" />
                            </div>
                            <div className="clients-slide__persona_info">
                                <div className="clients-slide___name">NAME LASTNAME</div>
                                <div className="clients-slide__position">POSITION, COMPANY NAME</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>  
                </Slider>
                </div>
                </div>
                <div className="clients-logos" style={{top: offset}}>
                <div className="clients-logos-aligner">
                    <div className="clients-logo">
                        <img src={PUBLIC_URL + "images/logo1.png"} alt="logo1" />
                    </div>
                    <div className="clients-logo">
                        <img src={PUBLIC_URL + "images/logo2.png"} alt="logo2" />
                    </div>
                    <div className="clients-logo">
                        <img src={PUBLIC_URL + "images/logo3.png"} alt="logo3" />
                    </div>
                    <div className="clients-logo">
                        <img src={PUBLIC_URL + "images/logo4.png"} alt="logo4" />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}