
import './App.css';
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


class Form extends Component {
    constructor () {
       super()
       //initialize state
       this.state = {
            todo:'',
            time:'',
            todoList:[]
       }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { todoList, todo, time } = this.state //destructuring
		const todoObject = {todo, time,}
		
		todoList.push(todoObject)
		
		this.setState({ todoList, todo:'', time:'' })
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div id="man"> 
				<h1 id="hi">To Do List App</h1>
                <form class="done" onSubmit={this.handleSubmit}>
                    <input name="todo" onChange={this.handleChange} placeholder="To do" value={this.state.todo}/>
                    <input name="time" onChange={this.handleChange} placeholder="Time" value={this.state.time}/>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.todoList.map((item, index) => 
                    <li style={{backgroundColor: index%2===0 ? 'orange' : 'blue'}} key={index}> <p className="todoItem">{item.todo}</p> 
					<p>
					{item.time}
					</p></li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Form;