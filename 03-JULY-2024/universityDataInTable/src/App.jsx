import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const App = () => {
  const [collegeData, setCollegeData] = useState([]);

  const fetchCollegeData = async () => {
    const data = await fetch(
      'http://universities.hipolabs.com/search?country=india'
    );
    const json = await data.json();
    setCollegeData(json);
  };
  useEffect(() => {
    fetchCollegeData();
  }, []);

  return collegeData.length === 0 ? (
    <h1 className='text-center'>Loading...</h1>
  ) : (
    <div>
      <h1 className='text-center p-4'>API ACCESS ( PRINT DATA )</h1>
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
                <a href={data.web_pages} target='_blank'>
                  {data.web_pages}
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
