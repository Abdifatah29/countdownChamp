import React,{Component} from 'react';
import Clock from './Clock'
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline:  '29 November, 2020',
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
             <div className="form__group field">
                <input
                     onChange={event => this.setState({newDeadline: event.target.value})}
                     type="input" class="form__field" placeholder="New Date" name="Date" required />
                <label for="Date" class="form__label">New Date</label>
            </div>
            
             <div className="button">
                 <button onClick={this.changeDeadline}>Submit</button>
             </div>
            </div>
        )

    }
}

export default Body;
