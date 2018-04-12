import React, {Component} from 'react'
import { connect } from 'react-redux'
import { decreaseAction } from '../../actions/index'
import { CounterDown } from '../../components/decrease/index'


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

// Connected Component
export const App_d = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterDown)