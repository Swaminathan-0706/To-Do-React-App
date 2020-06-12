import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle=()=>{
        
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed? 'line-through':'none'
        }
        
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>{' '}
                    {this.props.todo.title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,this.props.todo.id)}>x</button>
                    </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.protoTypes={
    todo:PropTypes.array.isRequired
}
const btnStyle={
    background:'red',
    color: 'white',
    border:'none',
    borderRadius:'50%',
    padding: '5px 9px',
    cursor:'pointer',
    float:'right'
}
export default TodoItem
