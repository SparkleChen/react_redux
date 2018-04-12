import React, {Component} from 'react'
import { connect } from 'react-redux'
import { increaseAction } from '../../actions/index'
import { CounterUp } from '../../components/increase/index'


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
export const App_u = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterUp)