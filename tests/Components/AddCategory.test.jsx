import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
  test('should change the value in textbox', () => { 
    render(<AddCategory  onNewValue={()=>{}}/>)
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value : 'sukuna' } } );
    expect(input.value).toBe('sukuna');
   });

   test('it should call onNewCategory if the input have a value', () => {
    const inpuValue = 'sukuna';
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={onNewValue} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, {target : { value: inpuValue}});
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewValue).toHaveBeenCalledTimes(1);
    expect(onNewValue).toHaveBeenLastCalledWith(inpuValue);
   });

   test('it should not call onNewCategory if the input is empty', () => { 
      const onNewValue = jest.fn();
      const inputValue = '';
      render(<AddCategory onNewValue={onNewValue} />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      fireEvent.input(input, {target : {value : inputValue}});
      fireEvent.submit(form);
      expect(onNewValue).not.toHaveBeenCalled();

    })

 });