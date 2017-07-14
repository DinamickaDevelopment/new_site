import React, {Component} from 'react' 
import debounce from 'debounce'
import {Sidebar, Home, ProjectsPage, Appgaged, MobileNav, FadeIn} from './' 
import {Route, Redirect, Switch} from 'react-router' 
import { connect } from 'react-redux'
import * as actions from '../actions'  
import { withRouter } from 'react-router-dom' 

class Container extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dispatch: props.dispatch, 
			isMobile: false,  
			tab_h: 0, 
			h: 0, 
			w: 0, 
			logos_offset: 0
		}	 
		
		this.resizeHandler = this.resizeHandler.bind(this); 
		
	}
	componentDidMount() {

		window.addEventListener('resize', debounce(this.resizeHandler, 100)); 
		this.resizeHandler(); 

	}

	componentWillUnmount() {
		window.removeEventListener(this.resizeHandler);
	} 
	
	resizeHandler() {	


		if (window.innerWidth < 1025 && this.state.isMobile) {
			this.setState({
				h: window.innerHeight, 
				w: window.innerWidth
			})	
		}
		if ((window.innerWidth < 1025 || window.innerHeight < 701) && !this.state.isMobile) {
			this.setState({
				isMobile: true, 
				h: window.innerHeight, 
				w: window.innerWidth
			})
		} else if (window.innerWidth >= 1025 && this.state.isMobile) {
			this.setState({
				isMobile: false, 
				tab_h: window.innerHeight / 2.6, 
				h: window.innerHeight, 
				w: window.innerWidth, 
				logos_offset: (window.innerHeight * 5) - 125 
			})

		} 
		else if (window.innerWidth >= 1025) {
			this.setState({
				tab_h: window.innerHeight / 2.6, 
				h: window.innerHeight, 
				w: window.innerWidth, 
				logos_offset: (window.innerHeight * 5) - 125 
			})
		} 
	}
	
	render() {
		let {isMobile} = this.state
		return(
			<div>
				{isMobile ? <MobileNav /> : <Sidebar />}  
				<Route exact path="/appgaged" render={ () => <FadeIn><Appgaged {...this.state}/></FadeIn>} />
				<Route exact path="/our-projects" render={ () => <FadeIn><ProjectsPage {...this.state} /></FadeIn>} />
				<Switch> 
					<Route exact path="/home" render={ () => <Home {...this.state} />} />  
					<Route exact path="/" render={ () => <Home {...this.state} />} /> 
				</Switch>
			</div>
		) 
	}
}

const mapContainer = (state) => ({
	test: state.test
})

Container = withRouter(connect(mapContainer)(Container))

export default Container