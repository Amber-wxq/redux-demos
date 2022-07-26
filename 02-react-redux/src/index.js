import React,{ Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider ,connect} from "react-redux";


class Counter extends Component {
    render() {
        const {value,onIncreaseClick} = this.props
        return(
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        ) 
    }
}

Counter.propTypes={
    value: PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired,
}

//Action

const increaseAction ={type:'increase'}

//Reducer

function counter(state={count:0},action){
    const count=state.count
    switch(action.type){
        case 'increase':
            return {count:count+1}
        default:
            return state
}
}

//store

const store=configureStore(counter);

function mapStateToProps(state){
    return{
        value:state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick:()=>dispatch(increaseAction)
    }
}
//connected Component//

const App=connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store} >
        <App />
        </Provider>,
        document.getElementById('root')
)