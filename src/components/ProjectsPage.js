import React, {Component} from 'react' 
import {Sidebar, ProjectTab} from './'  
import { Scrollbars } from 'react-custom-scrollbars';
import './css/ProjectsPage.css' 
import {push} from 'react-router-redux'

export default class ProjectsPage extends Component { 
    constructor() {
        super() 
    }

    render() { 
        let {tab_h, isMobile, h, w, dispatch} = this.props  
        if (tab_h === 0 || w < 1025) tab_h = 240 

        let page_content = <div className="projects-page__content">
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
                                colorClass="recent-works-gradient-violet" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="top-offset" 
                                onClick={() => {
                                    
                                    window.location.pathname = '/appgaged' 
                                    //dispatch(push('/appgaged'))
                                }}
                            />
                            <ProjectTab 
                                h={tab_h}
                                tabClass="small-tab" 
                                colorClass="recent-works-gradient-yellow" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="full-offset"
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center"> 
                            <ProjectTab 
                                h={window.innerWidth >= 768 ? (tab_h * 2) : tab_h}
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
                                colorClass="recent-works-violet" 
                                title="PROJECT TITLE"
                                category="WEB DEVELOPMENT"
                                offsetClass="top-offset"
                            />
                            <div className="recent-works__tabs_tab small-tab project-btn-tab"
                            style={window.innerWidth >= 768 ? {height: tab_h} : {height: 60, marginTop: 10}}>
                                <div className="recent-works-placeholder recent-works-white centered-tab">
                                    <div className="recent-works__all-projects-btn">
                                        <div> <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        4/16 <i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
        return (

            <div className="projects-page">
                {isMobile ? <Scrollbars style={{height: h, width: w}}>{page_content}</Scrollbars> : 
                page_content}
            </div>
        )
    }
}