import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('test in useFetchGifs ', () => { 
  
  test('It should return the initial state', () => {
    const {result} = renderHook( () =>  useFetchGifs('Sukuna') );
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('It should return an array of images and isLoading in false', async() => { 
    const {result} = renderHook(() => useFetchGifs('Gojo'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

   });
 });