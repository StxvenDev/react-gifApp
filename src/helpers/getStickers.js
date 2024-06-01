export const getStickers = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=KE6AZHIig3ef1QdvbmeqidF38BJVKb74&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const stickers = data.map(sticker => ({
    id:sticker.id,
    title: sticker.title,
    url:sticker.images.fixed_height.webp
    })
  );
  return stickers;
}
