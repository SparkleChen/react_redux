import React, {Component} from 'react'

export class CounterDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, onDecreaseClick} = this.props;
        return (
            <div>                      
                <button onClick={onDecreaseClick}>Decrease</button>
                <p>点我减少{ value }</p>
            </div>
        );
    }
}