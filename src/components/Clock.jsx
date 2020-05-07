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
    componentDidMount() {
        this.getTimeUntil(this.props.deadline);
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
        // this.getTimeUntil(this.props.deadline);
        return(
            <div className="clocks">
                <div>{this.state.days} days</div>
                <div>{this.state.hours} hours</div>
                <div>{this.state.minutes} minutes</div>
                <div>{this.state.seconds}seconds</div>
             </div>
        )
    }
}

export default Clock;
