import { useState, useEffect } from 'react';

const useFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  const fetchNewsApi = async () => {
    try {
      const response = await fetch('https://inshorts.vercel.app/news/top');
      const json = await response.json();
      setApiData(json.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewsApi();
  }, []);
  return { apiData };
};

export default useFetchApi;
