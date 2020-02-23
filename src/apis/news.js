export const requestTopHeadlines = async () => {
  return await fetch(
    'http://newsapi.org/v2/top-headlines?country=kr&apiKey=1f1fb2150ba04dc6bc38714164b6cc1d'
  )
    .then(response => response.json())
    .then(json => {
      window.console.log(json);
      return json.articles;
    })
    .catch(error => {
      return error;
    });
};
