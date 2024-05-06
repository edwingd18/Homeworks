export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=41S1PaFNvbU5dfs0JGPNgVmopPRJRZMW&q=${category}&limit=5&offset=0&rating=g&lange=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
