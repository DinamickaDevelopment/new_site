import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Sidebar, ServiceTab, ProjectTab } from './';
import './css/Home.css';
import { ScrollToTopOnMount, SectionsContainer, Section } from '../lib/fullpage';

class Home extends Component {

	constructor() {
		super();

		this.state = {
			isMobile: false, 
			revealed: false,  
			tab_h: 0
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
		if (window.innerWidth < 768 && !this.state.isMobile) {
			this.setState({
				isMobile: true
			})
		} else if (window.innerWidth >= 768 && this.state.isMobile) {
			this.setState({
				isMobile: false
			})

		} else if (window.innerWidth >= 768) {
			this.setState({
				tab_h: window.innerHeight / 2.6
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
		let {tab_h} = this.state;
		return (<div className="scroll-wrapper">

			{!this.state.isMobile ?
				<div className={"homepage-react " + (this.state.revealed ? '' : 'to-reveal')}>
					<Sidebar />
					<div className="homepage__content">
						<SectionsContainer {...options}> 
							<Section>
								<div className="homepage__content_tab centered">
									<div className="home-intro__container">
										<div className="home-intro__container_title">
											<h1>Dinamicka Development</h1>
											<h3>Tiny little small description</h3>
										</div>
									</div>
									<a className="scroll-down-btn" href="#what-we-do">
										<div>Scroll to learn more</div>
										<div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
									</a>
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
								<div className="row">
									<div className="homepage__section-title">
										<h2>WHAT WE DO</h2>
										<hr />
									</div>
								</div>
									<div className="what-we-do__tabs">
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-left">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/web.png" 
													content={<span>web <br /> development</span>}
													/>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/mob.png" 
													content={<span>mobile <br /> development</span>}
													/>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/ui.png"  
													content={<span>ui/ux</span>}
													/>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-left">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/marketing.png"  
													content={<span>internet <br /> marketing</span>}
													/>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/copy.png"  
													content={<span>copywriting</span>}
													/>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
												<ServiceTab 
													tabClass="small-tab" 
													h={tab_h}
													src="/images/hr.png"  
													content={<span>hr <br /> services</span>}
													/>
											</div>
										</div>
									</div>			
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
									<div className="row">
										<div className="homepage__section-title">
											<h2>OUR RECENT WORKS</h2>
											<hr />
										</div>
										<div className="recent-works__filter">
											<span className="active">ALL</span>
											<span>WEB</span>
											<span>MOBILE</span>
											<span>UI/UX</span>
										</div>
									</div> 
									<div className="row">
										<div className="recent-works__tabs">
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-left"> 
													<ProjectTab 
														h={tab_h}
														tabClass="small-tab" 
														colorClass="recent-works-violet" 
														title="PROJECT TITLE"
														category="WEB DEVELOPMENT"
														offsetClass="top-offset"
													/>
													<ProjectTab 
														h={tab_h}
														tabClass="small-tab" 
														colorClass="recent-works-gray" 
														title="PROJECT TITLE"
														category="WEB DEVELOPMENT"
														offsetClass="full-offset"
													/>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center"> 
													<ProjectTab 
														h={tab_h * 2}
														tabClass="big-tab" 
														colorClass="recent-works-gradient-green" 
														title="PROJECT TITLE"
														category="WEB DEVELOPMENT"
														offsetClass="full-offset"
													/>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
													<ProjectTab 
														h={tab_h}
														tabClass="small-tab" 
														colorClass="recent-works-gradient-violet" 
														title="PROJECT TITLE"
														category="WEB DEVELOPMENT"
														offsetClass="top-offset"
													/>
													<div className="recent-works__tabs_tab small-tab"
														style={{height: tab_h}}>
														<div className="recent-works-placeholder recent-works-white centered-tab">
															<div className="recent-works__all-projects-btn">
																<div>ALL PROJECTS <i className="fa fa-chevron-right" aria-hidden="true"></i></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
									<div className="row">
										<div className="homepage__section-title">
											<h2>OUR TEAM</h2>
											<hr />
										</div>
									</div>
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
									<div className="row">
										<div className="homepage__section-title">
											<h2>WHAT OUR CLIENTS SAY</h2>
											<hr />
										</div>
									</div>
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
									<div className="row">
										<div className="homepage__section-title">
											<h2>LATEST POSTS</h2>
											<hr />
										</div>
									</div>
								</div>
							</Section>
							<Section>
								<div className="homepage__content_tab_block"> 
									<div className="row">
										<div className="homepage__section-title">
											<h2>CONTACT US</h2>
											<hr />
										</div>
									</div>
								</div>
							</Section>
						</SectionsContainer>
					</div>
				</div> :
				<div className="homepage-mob">

				</div>
			} </div>)
	}
}

const mapHome = (state) => ({
	test: state.test
})

Home = connect(mapHome)(Home);
export default Home