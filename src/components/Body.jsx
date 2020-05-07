import React,{Component} from 'react';
import Clock from './Clock'
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
             <Clock
                 deadline={this.state.deadline}
             />
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
