import React from 'react'
import { getByRole, render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/Components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');


describe('Test in <GifGrid />', () => { 
  const category = 'Sukuna'
  test('should show h3 with the message "cargando" ', () => { 
    useFetchGifs.mockReturnValue({
      images : [],
      isLoading : true
    });
    render(<GifGrid category={category}/>);
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
    screen.debug();
   });

   test('It should show items when the images are uploaded', () => { 
      const gifs = [
        {
          id: '305',
          title: "Satoru",
          url: "https://satoru.org",
        },
        {
          id: '5032',
          title: "Sukuna",
          url: "https://sukuna.org",
        },
      ];
      useFetchGifs.mockReturnValue({
        images : gifs,
        isLoading : false
      });
      render(<GifGrid category={category} />);
      screen.debug();
      expect(screen.getAllByRole('img').length).toBe(2);
      expect(screen.getAllByText('Sukuna')).toBeTruthy();
    });
 });