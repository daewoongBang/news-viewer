export const requestArticles = async category => {
  const query = category === 'all' ? '' : `&category=${category}`;

  return await fetch(
    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1f1fb2150ba04dc6bc38714164b6cc1d`
  )
    .then(response => response.json())
    .then(json => {
      return json.articles;
    })
    .catch(error => {
      return error;
    });
};
