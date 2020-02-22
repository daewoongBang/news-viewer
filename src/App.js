import React, { useState } from 'react';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    await fetch(
      'http://newsapi.org/v2/top-headlines?country=kr&apiKey=1f1fb2150ba04dc6bc38714164b6cc1d'
    )
      .then(response => response.json())
      .then(json => {
        setData(json);
        window.console.log(json);
      })
      .catch(error => {
        window.console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
      <NewsList />
    </div>
  );
}

export default App;
