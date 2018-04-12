import React, {Component} from 'react'
import { App_u } from './counterup/index'
import { App_d} from './counterdown/index'

export class App extends Component {
    constructor(props) {
        super(props);
    } 
    render() {    
        return (
            <div>                      
               <App_u/>
               <App_d/>
            </div>
        );
    }
}