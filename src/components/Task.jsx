import React from 'react'
import styled from "styled-components"

const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 260px;
    margin: 1rem auto;
    justify-items: start;
    background-color: ${({ color }) => color};
    border-radius: 5px;
`

const TaskText = styled.p`
    color: white;
    text-decoration: ${({ done }) => done ? "line-through" : "none"};
    text-decoration-color: black;
`

const TaskButton = styled.button`
    font-size: .8rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: .3rem .5rem;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: white;
        color: black;
    }
`

const Task = ({ color, title, done, handleCompleteTask, handleDeleteTask }) => {
    return (
        <TaskContainer color={color}>
            <input
                type="checkbox"
                onChange={handleCompleteTask}
                defaultChecked={done}
            />
            <TaskText done={done}>{title}</TaskText>
            <TaskButton onClick={handleDeleteTask}>Delete</TaskButton>
        </TaskContainer>
    )
}

export default Task
