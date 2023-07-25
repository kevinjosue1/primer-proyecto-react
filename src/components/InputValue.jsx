import React, { useState } from 'react'

export const InputValue = ({agregarTareas}) => {
    const [inputValue, setInputValue]=useState('');
    const onInputChange=(event)=> {
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        agregarTareas(inputValue)
    }

    return (
    <form onSubmit={onSubmit}>
        <input type="text"  placeholder='Ingrese Tarea'className='form-control' value={inputValue} onChange={onInputChange}/>
    </form>
  )
}
