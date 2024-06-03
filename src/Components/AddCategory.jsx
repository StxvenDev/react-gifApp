import React from 'react'
import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory = ({onNewValue}) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    const inputTrim = inputValue.trim();
    event.preventDefault();
    if(inputTrim.length <= 1 ) return;
    // setCategories(c => [inputValue, ...c]);
    onNewValue(inputTrim);
    setInputValue('');
  }
  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
      <input 
          type="text"
          placeholder="Buscar gifs"
          value={inputValue} 
          onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewValue : PropTypes.func.isRequired
}
