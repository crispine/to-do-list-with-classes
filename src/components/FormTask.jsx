import React from 'react'
import styled from "styled-components"
import allColors from "../styles/colors"
import ColorBox from './Colorbox'
import { generate as id } from "shortid"

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${allColors.mainColor};
    background: none;
    outline: none;
    color: ${allColors.mainColor};
`

const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    border-radius: 5px;
    outline: none;
    margin: 7px;
    padding: 7px;
    font-size: 16px;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: ${allColors.mainColor};
        color: white;
    }
`

const ColorsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin: 0 auto .5rem;
`

const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
    <form onSubmit={handleSubmit}>
        <Input name="title" type="text" />
        <ColorsContainer>
            {
                allColors.colors.map(color => (
                    <ColorBox
                        key={id()}
                        handleChangeColor={handleChangeColor}
                        color={color}
                        isChecked={colorSelected === color}
                    />
                ))
            }
        </ColorsContainer>
        <Button>Add task</Button>
    </form>
)

export default FormTask;
