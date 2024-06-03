import { useEffect, useState } from 'react'
import { getStickers } from '../helpers/getStickers';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // const getImages = async() => {
  //   const newImage = await getStickers(category);
  //   setImages(newImage);
  // }
  useEffect(() => {
    // getImages();
    getStickers(category).then((image) => {
      setImages(image);
      setisLoading(false);
    });
  }, []);
  return {
    images,
    isLoading
  }
}
