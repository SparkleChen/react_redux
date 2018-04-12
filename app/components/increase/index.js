import React, {Component} from 'react'
 
export class CounterUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <button onClick={onIncreaseClick}>Increase</button>
                <p>点我增加{ value }</p>
            </div>
        );
    }
}