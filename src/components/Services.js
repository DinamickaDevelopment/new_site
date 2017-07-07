import React, {Component} from 'react' 
import {ServiceTab} from './'

export default class OurServices extends Component {
    render() {
        let {h} = this.props 
        return (
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
                                h={h}
                                src="/images/web.png" 
                                content={<span>web <br /> development</span>}
                                />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center">
                            <ServiceTab 
                                tabClass="small-tab" 
                                h={h}
                                src="/images/mob.png" 
                                content={<span>mobile <br /> development</span>}
                                />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
                            <ServiceTab 
                                tabClass="small-tab" 
                                h={h}
                                src="/images/ui.png"  
                                content={<span>ui/ux</span>}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-left">
                            <ServiceTab 
                                tabClass="small-tab" 
                                h={h}
                                src="/images/marketing.png"  
                                content={<span>internet <br /> marketing</span>}
                                />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-center">
                            <ServiceTab 
                                tabClass="small-tab" 
                                h={h}
                                src="/images/copy.png"  
                                content={<span>copywriting</span>}
                                />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-wrap-right">
                            <ServiceTab 
                                tabClass="small-tab" 
                                h={h}
                                src="/images/hr.png"  
                                content={<span>hr <br /> services</span>}
                                />
                        </div>
                    </div>
                </div>	
            </div>
        )
    }
}