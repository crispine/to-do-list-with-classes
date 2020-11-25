import React, { Component } from 'react'
import { createGlobalStyle } from "styled-components"
import { generate as id } from "shortid"

import FormTask from "./components/FormTask"
import allColors from "./styles/colors"
import Task from "./components/Task"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #E6BCCD;
    color: ${allColors.mainColor};
    text-align: center;
    margin: 0;
  }
`

class App extends Component {

  state = {
    colorSelected: allColors.colors[0],
    tasks: [
      {
        title: "Repasar promises",
        color: allColors.colors[0],
        done: false
      }
    ]
  }

  // it changes the selected color for the task
  handleChangeColor = (color) => {
    this.setState({ colorSelected: color })
  }

  // it takes the text from the input to the task
  handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.title.value.trim() !== "") {
      this.createNewTask(e.target.title.value)
      e.target.title.value = ""
    }
  }

  // it creates a new task with all the information needed: title, color and status (done or not)
  createNewTask = (title) => {
    const newTask = {
      id: id(),
      title,
      color: this.state.colorSelected,
      done: false
    }

    const allTasks = [...this.state.tasks, newTask]

    this.setState({ tasks: allTasks })
  }

  // it changes the status of the task to done (or not)
  handleCompleteTask = (id) => {
    const currentTasks = this.state.tasks
    const task = this.state.tasks.find(task => task.id === id)
    const index = currentTasks.indexOf(task)

    currentTasks[index].done = !currentTasks[index].done

    this.setState({ tasks: currentTasks })
  }

  // it deletes the task
  handleDeleteTask = (id) => {
    let currentTasks = this.state.tasks
    currentTasks = currentTasks.filter(task => task.id !== id)

    this.setState( { tasks: currentTasks })
  }

  render() {
    const { colorSelected, tasks } = this.state

    return (
      <>
        <GlobalStyle />
        <h1>To do list</h1>
        <FormTask
          handleChangeColor={this.handleChangeColor}
          handleSubmit={this.handleSubmit}
          colorSelected={colorSelected}
        />
        {
          this.state.tasks.length === 0 && <h3>There aren't any tasks yet. Write one!</h3>
        }
        {
          tasks.map(task => (
            <Task
              key={id()}
              title={task.title}
              color={task.color}
              done={task.done}
              handleCompleteTask={() => this.handleCompleteTask(task.id)}
              handleDeleteTask={() => this.handleDeleteTask(task.id)}
            />
          ))
        }
      </>
    );
  }
}

export default App;
