import React, {Component} from 'react' 
import { ProjectTab } from './' 

export default class OurProjects extends Component {
    render() { 
        let {h} = this.props 
        return (
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
                                h={h}
                                tabClass="small-tab" 
                                colorClass="recent-works-violet" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="top-offset"
                            />
                            <ProjectTab 
                                h={h}
                                tabClass="small-tab" 
                                colorClass="recent-works-gray" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="full-offset"
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center"> 
                            <ProjectTab 
                                h={window.innerWidth >= 768 ? (h * 2) : h}
                                tabClass="big-tab" 
                                colorClass="recent-works-gradient-green" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="full-offset"
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
                            <ProjectTab 
                                h={h}
                                tabClass="small-tab" 
                                colorClass="recent-works-gradient-violet" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="top-offset"
                            />
                            <div className="recent-works__tabs_tab small-tab project-btn-tab"
                                style={window.innerWidth >= 768 ? {height: h} : {height: 60, marginTop: 10}}>
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
        )
    }
}