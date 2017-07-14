import React, {Component} from 'react' 
import './css/FadeIn.css'

export default class FadeIn extends Component {
    constructor() {
        super() 
        this.state = {
            cls: "fade-transition to-fade-in"
        }
    }

    componentDidMount() { 
        let self = this; 
        setTimeout(() => {
            self.setState({
                cls: 'fade-transition'
            })
        }, 200)

    }
    componentWillUnmount() {
        this.setState({
            cls: 'to-fade-in fade-transition'
        })
    }
    render() {
        let {cls} = this.state 
        let {children} = this.props 
        return (<div className={cls}>{children}</div>)    
    }
}