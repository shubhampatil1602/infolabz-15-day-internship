import { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/newsContext';

const Sidebar = () => {
  const { setNews, category, setCategory, toggle } = useContext(NewsContext);
  const [focusedCategory, setFocusedCategory] = useState('all');

  const allRef = useRef(null);

  const fetchCategory = async () => {
    const response = await fetch(
      'https://inshortsapi.vercel.app/news?category=' + category
    );
    const data = await response.json();
    console.log(category);
    setNews(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  useEffect(() => {
    if (allRef.current) {
      allRef.current.focus();
    }
  }, []);

  const handleCategoryClick = (categoryTitle) => {
    setCategory(categoryTitle.toLowerCase());
    setFocusedCategory(categoryTitle.toLowerCase());
  };

  const newsCategories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'National' },
    { id: 3, title: 'Business' },
    { id: 4, title: 'Sports' },
    { id: 5, title: 'World' },
    { id: 6, title: 'Politics' },
    { id: 7, title: 'Technology' },
    { id: 8, title: 'Startup' },
    { id: 9, title: 'Science' },
    { id: 10, title: 'Entertainment' },
    { id: 11, title: 'Unconventional' },
    { id: 12, title: 'Miscellaneous' },
    { id: 13, title: 'Automobile' },
  ];

  return (
    toggle && (
      <aside className='p-4 border h-screen w-full sm:block sm:w-[18%] sticky top-0 left-0 bg-white'>
        <h3 className='font-semibold text-2xl p-4'>News Categories</h3>
        <div className='flex flex-col'>
          {newsCategories.map((category) => (
            <Link
              to={`/${category.title.toLowerCase()}`}
              onClick={() => handleCategoryClick(category.title)}
              key={category.id}
              ref={category.title.toLowerCase() === 'all' ? allRef : null}
              className={`py-2 px-4 font-medium hover:bg-blue-100 rounded-md outline-none ${
                focusedCategory === category.title.toLowerCase()
                  ? 'focus:bg-blue-100 outline-none'
                  : ''
              }`}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </aside>
    )
  );
};

export default Sidebar;
