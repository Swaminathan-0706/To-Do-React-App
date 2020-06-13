import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import {v4 as uuid} from 'uuid'
import{BrowserRouter as Router,Route} from 'react-router-dom';
import About from './Components/Pages/About';
import axios from 'axios';
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos:[
        //  {
        //    id:uuid(),
        //    title:"Do project",
        //    completed:false
        //  },
        //  {
        //   id:uuid(),
        //   title:"Sleep early",
        //   completed:false
        // },
        // {
        //   id:uuid(),
        //   title:"Watch Ramayan",
        //   completed:false
        // }
       ]
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response=>{
        this.setState({
          todos:response.data
        })
      })
      .catch(error=>{console.log(error)})
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
  //Add Todo
  addTodo=(title)=>{
    const newTodo={
      id:uuid(),
      title,
      completed:false
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }
  render() {
      
      
      return (
        <Router>
          <div className="App">
            <div className="container">
            <Header/>
            <Route exact path="/" render={props=>(
              <>
              <AddTodo addTodo={this.addTodo}/>
             <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </>
            )}/>
            <Route path="/about" component={About}/>
            </div>
          </div>
          </Router>
      )
  }
}

export default App;
