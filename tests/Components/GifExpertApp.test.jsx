import React from 'react'
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('test in <GifExpertApp />', () => { 
  const category = 'Sukuna'
  test('It should not search twice the same category', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, {target:{value:category}});
    fireEvent.submit(form);
    fireEvent.input(input, {target:{value:category}});
    fireEvent.submit(form);
    expect(screen.getAllByText('sukuna').length).toBe(1);
    screen.debug()
  });
 })