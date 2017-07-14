import React, { Component } from 'react'

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
			revealed: false 
		}

	}

	componentDidMount() {

		if (!window.location.hash) {
			window.location.hash = "home"
		} 

		this.setState({
			revealed: true
		}) 

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
		let {tab_h, h, w, logos_offset} = this.props; 
		return (<div className="scroll-wrapper">

			{!this.props.isMobile ?
				<div className={"homepage-react " + (this.state.revealed ? '' : 'to-reveal')}>
					<ScrollToTopOnMount />
					<div className="homepage__content">
						<SectionsContainer {...options}> 
							<Section><Intro /></Section>
							<Section><OurServices h={tab_h} /></Section>
							<Section><OurProjects h={tab_h} /></Section>
							<Section><OurTeam /></Section>
							<Section><Testimonials h={h} offset={logos_offset}/></Section>
							<Section><LatestPosts /></Section>
							<Section><ContactUs h={h} /></Section>
						</SectionsContainer>
					</div>
				</div> :
				<HomeMobile h={h} w={w} /> 
			} </div>)
	}
}

export default Home