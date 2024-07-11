import NewsCard from './NewsCard';
import { useState, useEffect } from 'react';

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://inshortsapi.vercel.app/news?category=sports'
        );
        const data = await response.json();
        setNewsData(data.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center pt-8 pb-6'>
        Latest Sports News
      </h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        {newsData.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
