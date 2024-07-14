import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { NewsContext } from './context/newsContext';
import { useState } from 'react';
import NewsCard from './components/NewsCard';
import Navbar from './components/Navbar';

const App = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('all');
  const [toggle, setToggle] = useState(true);
  return (
    <div className='flex w-full'>
      <NewsContext.Provider
        value={{ news, setNews, category, setCategory, toggle, setToggle }}
      >
        <BrowserRouter>
          <Sidebar />
          <div className='flex flex-col w-full sm:w-[82%]'>
            <Navbar />
            <Routes>
              <Route path='/' element={<NewsCard />} />
              <Route path='/:category' element={<NewsCard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NewsContext.Provider>
    </div>
  );
};

export default App;
