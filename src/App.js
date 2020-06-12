import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:[
         {
           id:1,
           title:"Do project",
           completed:false
         },
         {
          id:2,
          title:"Sleep early",
          completed:false
        },
        {
          id:3,
          title:"Watch Ramayan",
          completed:false
        }
       ]
    }
  }
  //Toggle
  markComplete=(id)=>{
    this.setState({
      todos:this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo;
      })
    })
  }
  //Delete Todo
  delTodo=(id)=>{
    this.setState({
      todos:[...this.state.todos.filter(todo=>
        todo.id!==id)]
    });
  }
  render() {
      
      
      return (
          <div className="App">
            <Header/>
             <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </div>
      )
  }
}

export default App;
