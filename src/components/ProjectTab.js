import React, {Component} from 'react'; 

export default class ProjectTab extends Component {
    render() { 

        let {tabClass, colorClass, title, category, offsetClass, h, onClick} = this.props 

        return (
            <div className={"recent-works__tabs_tab " + tabClass} 
            onClick={onClick}
            style={{height: h}}>
                <div className={"recent-works-placeholder " + colorClass}>
                    <div className={"recent-works__project-description " + offsetClass}>
                        <p className="main">{title}</p>
                        <p className="small">{category}</p>
                    </div>
                </div>
            </div>
        )
    }
}