import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';  
import debounce from 'debounce'; 


import { 
	Sidebar, 
	ServiceTab, 
	OurProjects, 
	OurServices, 
	LatestPosts, 
	OurTeam, 
	Testimonials, 
	ContactUs, 
	Intro, 
	HomeMobile   
} from './'; 

import './css/Home.css';
import { ScrollToTopOnMount, SectionsContainer, Section } from '../lib/fullpage';

class Home extends Component {

	constructor() {
		super();

		this.state = {
			isMobile: false, 
			revealed: false,  
			tab_h: 0, 
			h: 0, 
			w: 0, 
			offset: 0
		}

		this.resizeHandler = this.resizeHandler.bind(this);
	}

	componentDidMount() {

		window.addEventListener('resize', debounce(this.resizeHandler, 100)); 
		this.resizeHandler(); 

		console.log(window.location.hash)
		if (!window.location.hash) {
			window.location.hash = "home"
		} 

		this.setState({
			revealed: true
		}) 

	}

	componentWillUnmount() {
		window.removeEventListener(this.resizeHandler);
	}

	resizeHandler() {	
		if (window.innerWidth < 1025 && this.state.isMobile) {
			this.setState({
				h: window.innerHeight, 
				w: window.innerWidth, 
			})	
		}
		if (window.innerWidth < 1025 && !this.state.isMobile) {
			this.setState({
				isMobile: true, 
				h: window.innerHeight, 
				w: window.innerWidth, 
			})
		} else if (window.innerWidth >= 1025 && this.state.isMobile) {
			this.setState({
				isMobile: false, 
				tab_h: window.innerHeight / 2.6, 
				h: window.innerHeight, 
				w: window.innerWidth, 
				offset: (window.innerHeight * 5) - 125 
			})

		} 
		else if (window.innerWidth >= 1025) {
			this.setState({
				tab_h: window.innerHeight / 2.6, 
				h: window.innerHeight, 
				w: window.innerWidth, 
				offset: (window.innerHeight * 5) - 125 
			})
		} 


	}
	render() {

		let options = {
			activeClass: 'active',
			anchors: [ "home", "what-we-do", "our-projects", "team", "our-clients", "latest-posts", "contact-us"],
			arrowNavigation: true,
			className: 'SectionContainer',
			delay: 1000,
			scrollBar: false,
			navigation: false,
			sectionClassName: 'Section',
			sectionPaddingTop: '0',
			sectionPaddingBottom: '0',
			verticalAlign: false,
			scrollCallback: (states) => this.setState({ current: states.activeSection }), 
			isMobile: this.state.isMobile, 
			h: this.state.h, 
			w: this.state.w
		}; 

		let {PUBLIC_URL} = process.env; 
		let {tab_h, h, w, offset} = this.state;
		return (<div className="scroll-wrapper">

			{!this.state.isMobile ?
				<div className={"homepage-react " + (this.state.revealed ? '' : 'to-reveal')}>
					<Sidebar />
					<ScrollToTopOnMount />
					<div className="homepage__content">
						<SectionsContainer {...options}> 
							<Section><Intro /></Section>
							<Section><OurServices h={tab_h} /></Section>
							<Section><OurProjects h={tab_h} /></Section>
							<Section><OurTeam /></Section>
							<Section><Testimonials h={h} offset={offset}/></Section>
							<Section><LatestPosts /></Section>
							<Section><ContactUs /></Section>
						</SectionsContainer>
					</div>
				</div> :
				<HomeMobile h={h} w={w} /> 
			} </div>)
	}
}

const mapHome = (state) => ({
	test: state.test
})

Home = connect(mapHome)(Home);
export default Home