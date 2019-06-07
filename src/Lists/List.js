import React from 'react';
import ReactDOM from 'react-dom';

class Lists extends React.Component {

    addNewTodoData = (event) => {
        event.preventDefault();
        let newText = ReactDOM.findDOMNode(this.refs.newTodoText).value;
        let item = [{
            text: newText
        }];
        window.ee.emit("add", item);
    }

    changeToDone = (text,event) => {
        event.preventDefault();
        let item = [{
            text: text
        }];
        window.ee.emit("change", item);
    }


    
  
    render() {
        var todo = this.props.todo;
        var done = this.props.done;
        return (
            <div>
                <h1>To do</h1>
                <ul>
                    {JSON.stringify(todo) == '[]' ? "Nothin to do" 
                    :
                        todo.map(post => (
                            <li onClick={this.changeToDone.bind(null, post.text)}>{post.text}</li>
                        ))
                    }
                </ul>
                <h1>Done</h1>
                <ul>
                    {JSON.stringify(done) == '[]' ? "Nothin done"
                    :
                        done.map(post => (
                        <li>{post.text}</li>
                        ))
                    }
                </ul>
                <p>
                    <input 
                        type="text"
                        name="todo"
                        placeholder="Enter what need to do"
                        ref="newTodoText" 
                    />
                    <button onClick={this.addNewTodoData}>Add</button>
                </p>
            </div>
      );
    }
  }

export default Lists;
