import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

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
          completed:true
        }
       ]
    }
  }
  
    
  render() {
      
      
      return (
          <div className="App">
             <Todos todos={this.state.todos}/>
          </div>
      )
  }
}

export default App;
