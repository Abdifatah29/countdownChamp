import React,{Component} from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'May 25, 2020',
            newDeadline: ''
        }
    }
    changeDeadline = () => {
        this.setState({deadline: this.state.newDeadline})
    }
    render() {
        return (
             <div className="App">
             <div className="title">Countdown to {this.state.deadline}</div>
             <div className="clocks">
                <div>18 days</div>
                <div>30 hours</div>
                <div>15 minutes</div>
                <div>20 seconds</div>
             </div>
             <div>
                 <input placeholder="new date"
                     onChange={event => this.setState({newDeadline: event.target.value})}
                 />
                 <button onClick={this.changeDeadline}>Submit</button>
             </div>
            </div>
        )

    }
}

export default Body;
