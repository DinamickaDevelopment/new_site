import React, { Component } from 'react' 
import Slider from 'react-slick' 
import RangeSlider from 'react-rangeslider' 
import 'react-rangeslider/lib/index.css'
import './css/Team.css'

class SliderNavigation extends Component { 
    constructor() {
        super() 
        this.state = {
            step: 1
        } 
        this.handleChange = (val) => {
            this.setState({
                step: val
            })
        }
        this.switchSlide = () => {
            this.props.slider.slickGoTo(this.state.step)
        }

        this.switchSlide = this.switchSlide.bind(this)
        this.handleChange = this.handleChange.bind(this) 
    }
    render() {
        let {step} = this.state
        return (
        <div className="team-slider-navigation"> 
            <div className="team-slider-navigation__stats">{step}/6</div>
            <RangeSlider
                min={1}
                max={6}
                value={step}
                orientation="horizontal"
                onChange={this.handleChange} 
                onChangeComplete={this.switchSlide}
                tooltip={false}
            />
        </div>
        )
    }
}

export default class OurTeam extends Component {
    render() {  
        let {PUBLIC_URL} = process.env 
        let settings = { 
            arrows: false, 
            slidesToScroll: 1,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 250, 
            dots: true, 
            dotsClass: 'slick-dots slick-thumb nav-dots', 
            centerMode: false, 
            responsive: [{breakpoint: 1024, settings: {
                slidesToShow: 1, 
                autoplay: false 
            }}], 
            waitForAnimate: false
        }
        return (
            <div className="homepage__content_tab_block"> 
                <div className="row">
                    <div className="homepage__section-title">
                        <h2>OUR TEAM</h2>
                        <hr />
                    </div>
                </div> 
                <div className="team-slider-container">
                <Slider ref={(c) => this.slider = c} {...settings}>
                    <div>
                        <div className="slide__content slide-tab">
                            <img src={PUBLIC_URL + "images/he.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slide__content slide-tab">
                                <img src={PUBLIC_URL + "images/her.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slide__content slide-tab">
                                <img src={PUBLIC_URL + "images/he.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slide__content slide-tab">
                                <img src={PUBLIC_URL + "images/her.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slide__content slide-tab">
                                <img src={PUBLIC_URL + "images/he.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slide__content slide-tab">
                                <img src={PUBLIC_URL + "images/her.png"} className="slide__content_img img-responsive" />
                                <div className="slide__content_text">
                                    <p className="main">NAME LASTNAME</p>
                                    <p className="small">POSITION</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <SliderNavigation slider={this.slider}/>
                </div>
            </div>
        )
    }
}