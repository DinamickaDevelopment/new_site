import React, { Component } from 'react' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField'; 
import {
    cyan700,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator';
import './css/ContactUs.css'  

export default class ContactUs extends Component { 
    constructor() {
        super(); 
    
        this.state = {
            fullName: '', 
            email: '', 
            subject: '', 
            message: ''
        }
        this.handleChange = (val, prop) => {

            let newState = Object.assign({}, this.state); 
            newState[prop] = val; 

            this.setState({newState}); 
        }
        this.handleChange = this.handleChange.bind(this); 

    }

    render() {
        const styles = {
            block: {
                maxWidth: 450,
            },
            checkbox: {
                marginBottom: 16,
            },
            errorLabel: {
                position: "absolute",
                bottom: -12
            },
            floatLabel: {
                fontWeight: "lighter", 
                color: '#7f7f7f', 
                textTransform: 'uppercase'
            },
            floatLabelShrink: { 
                color: '#000', 
                fontWeight: 'normal', 
                textTransform: 'none'
            },  
            floatLabelFocus: {
                color: '#000', 
                fontWeight: 'normal', 
            },
            mui_theme: {
                palette: {
                    primary1Color: '#000',
                    primary2Color: cyan700,
                    primary3Color: grey600,
                    accent1Color: cyan700,
                    accent2Color: pinkA400,
                    accent3Color: pinkA100,
                    textColor: '#000',
                    secondaryTextColor: fade('#ccc', 0.7),
                    alternateTextColor: '#303030',
                    canvasColor: '#303030',
                    borderColor: fade('#ccc', 0.5),
                    disabledColor: fade('#ccc', 0.5),
                    pickerHeaderColor: fade('#ccc', 0.12),
                    clockCircleColor: fade('#ccc', 0.12),

                }
            }
        }
        let {PUBLIC_URL} = process.env 
        let {h} = this.props 
        return (
            <div className="homepage__content_tab_block">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="map-container" style={{height: h > 800 ? (h * 0.3) : (h * 0.2)}}>
                            {/*<img src={PUBLIC_URL + "/images/map.png"} alt="map" />*/}
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="homepage__section-title no-offset">
                        <h2>CONTACT US</h2>
                        <hr />
                    </div>
                </div> 
                <div className="contact-us__content">
                    <form name="contactForm" className="contact-form">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-lg hidden-md">
                                <div className="locations"> 
                                    <div className="icon-location">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <div className="form-info-location">
                                        23 des Samares Levis, Quebec, Canada
                                    </div>
                                    <div className="form-info-location">
                                        Kahenshtan str, 14, Tel-Aviv, Israel
                                    </div>
                                    <div className="form-info-location">
                                        Vikentiya Khvoiky
                                        St, 18/14, Kyiv, Ukraine
                                    </div>
                                </div>
                                <div className="contacts">
                                    <div><i className="fa fa-phone" aria-hidden="true"></i> +38 (093) 976 - 08 - 55</div>
                                    <div><i className="fa fa-envelope" aria-hidden="true"></i> info@dinamicka.com</div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                                <div className="form-title">LOCATIONS</div>
                                <div className="row form-info-location-offset-bottom">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-sx-12">
                                        <div className="form-info-location">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i> 23 des Samares Levis,
                                            <br /> Quebec, Canada
                                        </div>
                                        <div className="form-info-location">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i> Kahenshtan str, 14,
                                            <br /> Tel-Aviv, Israel
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-sx-12">
                                        <div className="form-info-location">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i> Vikentiya Khvoiky
                                            St, 18/14, <br /> Kyiv, Ukraine
                                        </div>
                                    </div>
                                </div>
                                <div className="form-title">CONTACTS</div>
                                <div className="row contacts-info">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"> 
                                    <div className="contacts-text">
                                        <i className="fa fa-phone" aria-hidden="true"></i> <span>+38 (093) 976 - 08 - 55</span>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="contacts-text">
                                        <i className="fa fa-envelope" aria-hidden="true"></i> <span>info@dinamicka.com</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                              <MuiThemeProvider muiTheme={getMuiTheme(styles.mui_theme)}> 
                                <div> 
                                    <div className="form-group top-group">
                                        <TextField 
                                            floatingLabelText="FULL NAME"
                                            fullWidth={true}
                                            type="text"
                                            floatingLabelStyle={styles.floatLabel}
                                            floatingLabelFocusStyle={styles.floatLabelFocus}
                                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                                            errorText={false}
                                            errorStyle={styles.errorLabel}
                                            onChange={(e) => {this.handleChange(e.target.value, 'fullName')}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField 
                                            floatingLabelText="EMAIL"
                                            fullWidth={true}
                                            type="email"
                                            floatingLabelStyle={styles.floatLabel}
                                            floatingLabelFocusStyle={styles.floatLabelFocus}
                                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                                            errorText={false}
                                            errorStyle={styles.errorLabel}
                                            onChange={(e) => {this.handleChange(e.target.value, 'email')}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField 
                                            floatingLabelText="SUBJECT"
                                            fullWidth={true}
                                            type="text"
                                            floatingLabelStyle={styles.floatLabel}
                                            floatingLabelFocusStyle={styles.floatLabelFocus}
                                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                                            errorText={false}
                                            errorStyle={styles.errorLabel}
                                            onChange={(e) => {this.handleChange(e.target.value, 'subject')}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField 
                                            floatingLabelText="WHAT'S ON YOUR MIND"
                                            fullWidth={true}
                                            type="text"
                                            floatingLabelStyle={styles.floatLabel}
                                            floatingLabelFocusStyle={styles.floatLabelFocus}
                                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                                            errorText={false}
                                            errorStyle={styles.errorLabel}
                                            onChange={(e) => {this.handleChange(e.target.value, 'message')}}
                                        />
                                    </div>
                                </div>
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 send-btn__container">
                            <div className="send-btn action-btn">SEND</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}