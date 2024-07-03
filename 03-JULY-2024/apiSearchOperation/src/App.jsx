import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [foundData, setFoundData] = useState(null);
  const [found, setFound] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const data = searchData.find((d) => d.name === searchText);
    if (data) {
      setFound(true);
      setFoundData(data);
      setSearchText('');
    } else {
      setFound(false);
      setFoundData(null);
      setSearchText('');
      alert('No data found');
    }
  };

  const fetchSearchData = async () => {
    try {
      const data = await fetch('https://isro.vercel.app/api/spacecrafts');
      const json = await data.json();
      setSearchData(json.spacecrafts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  return (
    <div>
      <h1 className='text-center p-4'>API SEARCH OPERATION</h1>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          className='w-50 m-auto'
          placeholder='Search Spacecraft'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {found && (
        <div>
          <h2>Spacecraft Found:</h2>
          <p>ID: {foundData.id}</p>
          <p>Name: {foundData.name}</p>
        </div>
      )}
    </div>
  );
};

export default App;
