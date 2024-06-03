import React from 'react'
import {useState} from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState(['shingeki no kyojin', 'naruto']);
  const onAddCategory = (newCategory = '') => {
    const lowerCategories = Categories.map(category => category.toLowerCase());
    const lowerNewCategory = newCategory.toLowerCase();
    if(lowerCategories.includes(lowerNewCategory)) return;
    setCategories([newCategory, ...Categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        // setCategories={setCategories} 
        onNewValue={value => onAddCategory(value)}
      />
      {
        Categories.map((category) =>(
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
