import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import useDynamicAPI from './hooks/useDynamicAPI';

const App = () => {
  const [search, setSearch] = useState('');

  const { collegeData, fetchCollegeData } = useDynamicAPI(search);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCollegeData(search);
  };
  return (
    <div>
      <h1 className='text-center p-4'>API ACCESS ( PRINT DATA )</h1>
      <div
        style={{
          margin: '10px',
        }}
      >
        <h4>Available Countries to search: </h4>
        <h5>
          United Kingdom, Uganda, France, India, United Arab Emirates, Brazil,
          Ukraine, Chile, United States and more...
        </h5>
      </div>

      <form
        style={{
          margin: '10px',
        }}
      >
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search country'
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* SR NO | UNIVERSITY NAME | STATE-PROVINCE  | WEBSITE LINK  */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SR NO</th>
            <th>UNIVERSITY NAME</th>
            <th>STATE-PROVINCE</th>
            <th>WEBSITE LINK</th>
          </tr>
        </thead>
        <tbody>
          {collegeData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data?.name}</td>
              <td>{data?.['state-province'] || 'N/A'}</td>
              <td>
                <a href={data.web_pages[0]} target='_blank'>
                  {data.web_pages[0]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
