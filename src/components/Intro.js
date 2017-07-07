import React, {Component} from 'react' 

export default class Intro extends Component {
    render() {
        return (
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
        )
    }
}