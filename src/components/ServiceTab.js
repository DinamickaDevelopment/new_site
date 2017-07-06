import React, {Component} from 'react'; 

export default class ServiceTab extends Component {
    render() { 

        let {tabClass, src, content, h} = this.props 
        let {PUBLIC_URL} = process.env 

        return(
            <div className={"what-we-do__tabs_tab " + tabClass} 
            style={{height: h}}>
                <div className="tab-content">
                    <div>
                        <img src={PUBLIC_URL + src} alt="Web development" alt="service image" />
                        <p className="what-we-do-text">{content}</p>
                    </div>
                </div>
            </div>
        )
    }
}