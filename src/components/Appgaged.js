import React, {Component} from 'react' 
import { Scrollbars } from 'react-custom-scrollbars';
import './css/Appgaged.css' 


export default class Appgaged extends Component {
    render() {
        let {h, w} = this.props  
        let {PUBLIC_URL} = process.env
        return (
            <Scrollbars style={{width: w, height: h}}>
            <div className="portfolio-page">
                <div className="portfolio-page-aligner">
                    <div className="portfolio-page__content">
                    <div className="portfolio-page__content_title-group">
                        <h1 className="gradient">Gaming Marketplace Solution</h1> 
                        <h2>UI/UX</h2>
                    </div> 
                    <img src={PUBLIC_URL + '/images/appgaged-main.png'} alt="Appgaged main screen" />
                    </div>
                </div>
                <div className="porfolio-project-description">
                    <img src={PUBLIC_URL + '/images/appgaged-description.png'} alt="Appgaged screen" />
                </div>
                <div className="portfolio-what-we-did">
                    <div className="portfolio-what-we-did__screen">
                         <img src={PUBLIC_URL + '/images/what-we-did-appgaged-1.png'} alt="Appgaged screen" />
                    </div>
                    <div className="portfolio-what-we-did__screen">
                        <img src={PUBLIC_URL + '/images/what-we-did-appgaged-2.png'} alt="Appgaged screen" />
                    </div>
                    <div className="portfolio-what-we-did__screen">
                        <img src={PUBLIC_URL + '/images/what-we-did-appgaged-3.png'} alt="Appgaged screen" />
                    </div>

                </div>
                <div className="portfolio-in-motion"></div>
                <div className="portfolio-typography"></div>
                <div className="portfolio-responsive"></div>
                <div className="portfolio-contact"></div>
            </div>

            </Scrollbars>
        )
    }
}