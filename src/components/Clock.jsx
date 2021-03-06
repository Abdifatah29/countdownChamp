import React, {Component} from 'react';


class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline));
    }
    leading0(num){
       return num < 10 ? '0' + num : num;
    }
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor((time/(1000*60*60*24)));
        const hours = Math.floor((time / (1000*60*60)) % 24);
        const minutes = Math.floor((time/60) % 60);
        const seconds = Math.floor((time/1000) % 60);
        this.setState(
            {
                days,
                hours,
                minutes,
                seconds
            }
        )
    }
    render(){
        return(
            <div className="clocks">
                <div>{this.leading0(this.state.days)} days</div>
                <div>{this.leading0(this.state.hours)} hours</div>
                <div>{this.leading0(this.state.minutes)} minutes</div>
                <div>{this.leading0(this.state.seconds)}seconds</div>
             </div>
        )
    }
}

export default Clock;
