import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NewsItem from './NewsItem';
import { ApiNews } from '../apis/index';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestArticles = category => {
    setLoading(true);
    ApiNews.requestArticles(category)
      .then(result => {
        setArticles(result);
      })
      .catch(error => {
        window.console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    requestArticles(category);
  }, [category]);

  return loading ? (
    <NewsListBlock>대기 중...</NewsListBlock>
  ) : !articles ? null : (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
