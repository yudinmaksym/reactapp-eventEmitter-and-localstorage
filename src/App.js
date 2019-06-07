import React, { Component } from 'react';
import Lists from './Lists/List.js';
import './App.css';

var todo = JSON.parse(localStorage.getItem('todolist'));
var done = JSON.parse(localStorage.getItem('donelist'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: todo || [],
      donelist: done || [],
    };
  }
  
  componentDidMount = () => {
    var self = this;
     window.ee.on("add", function(item) {
      var newTodo = item.concat(self.state.todolist);
      self.state.todolist.push({text: item[0].text});
      self.setState({todolist: newTodo});
      localStorage.setItem("todolist", JSON.stringify(self.state.todolist));
     });

    window.ee.on("change", function(item){
      var newDone = item.concat(self.state.donelist);
      self.state.donelist.push({text: item[0].text});
      self.setState({donelist: newDone});
      localStorage.setItem("donelist", JSON.stringify(self.state.donelist));
      var filtered = self.state.todolist.filter(function(value){
        return value.text != item[0].text;     
      });
      self.setState({todolist: filtered});
      localStorage.setItem("todolist", JSON.stringify(filtered));
    });
  }

  componentWillUnmount() {
    window.ee.off("add");
    window.ee.off("change");
  }

  render() {
    // console.log(this.state.todolist);
    return (
      <div className="app">
        <Lists todo={this.state.todolist} done={this.state.donelist} />
        
      </div>
    );
  }
}

export default App;
