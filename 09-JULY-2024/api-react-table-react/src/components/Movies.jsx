import { useEffect, useState } from 'react';

const Movies = () => {
  const [printTable, setPrintTable] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      'https://inshortsapi.vercel.app/news?category=sports'
    );
    const json = await response.json();
    const data = json.data;
    setPrintTable(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return !printTable.length ? (
    <h1 className='text-center'>loading...</h1>
  ) : (
    <>
      <h3 className='p-3 text-center my-4'>
        Sports Data in Bootstrap Table (react)
      </h3>
      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
            <th>SR NO</th>
            <th>NEWS TITLE</th>
            <th>AUTHOR</th>
            <th>DATE & TIME</th>
          </tr>
        </thead>
        <tbody id='tbody'>
          {printTable?.map((item) => (
            <tr key={item.id}>
              <td>{printTable.indexOf(item) + 1}</td>
              <li
                style={{
                  listStyle: 'none',
                }}
              >
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  href={item.url}
                  target='_blank'
                >
                  {item.title}
                </a>
              </li>
              <td>{item.author}</td>
              <td>
                {item.date} · {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
