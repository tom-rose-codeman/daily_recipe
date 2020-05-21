import React from 'react'
import { addTodos } from '../actions/actions'


class SelectRequirements extends React.Component {
    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <label>Max daily calories</label>
                    <input type='number' name='calories' onChange={this.handleChange}/>

                </form>
            </div>
        )
    }
}