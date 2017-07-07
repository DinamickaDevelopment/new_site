import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'; 


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
			offset: 0
		}

		this.resizeHandler = this.resizeHandler.bind(this);
	}

	componentDidMount() {

		window.addEventListener('resize', this.resizeHandler); 
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
		if (window.innerWidth < 900 && !this.state.isMobile) {
			this.setState({
				isMobile: true
			})
		} else if (window.innerWidth >= 900 && this.state.isMobile) {
			this.setState({
				isMobile: false
			})

		} else if (window.innerWidth >= 900) {
			this.setState({
				tab_h: window.innerHeight / 2.6, 
				h: window.innerHeight, 
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
			scrollCallback: (states) => this.setState({ current: states.activeSection })
		}; 

		let {PUBLIC_URL} = process.env; 
		let {tab_h, h, offset} = this.state;
		return (<div className="scroll-wrapper">

			{!this.state.isMobile ?
				<div className={"homepage-react " + (this.state.revealed ? '' : 'to-reveal')}>
					<Sidebar />
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
				<HomeMobile /> 
			} </div>)
	}
}

const mapHome = (state) => ({
	test: state.test
})

Home = connect(mapHome)(Home);
export default Home