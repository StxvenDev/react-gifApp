import React from "react"
import { render, screen } from "@testing-library/react"
import {GifItem} from '../../src/Components' 

describe('Pruebas en GifItem', () => { 
  const title = 'Sukuna';
  const url = 'https://sukuna-backflash.org/';
  test('It should match snapshot', () => { 
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
   });
   test('Url y title deben ser iguales', () => { 
      render(<GifItem title={title} url={url} />)
      const {src, alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
    });
    test('debe de mostrar el titulo en el componente', () => { 
      render(<GifItem title={title} url={url} />);
      expect(screen.getByText(title)).toBeTruthy();
     })
 })