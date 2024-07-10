import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const IsroTable = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://isro.vercel.app/api/spacecrafts');
    const json = await response.json();
    setData(json.spacecrafts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data?.length === 0 ? (
    <h1 className='p-2 m-3 text-center'>Loading...</h1>
  ) : (
    <Table bordered hover>
      <thead>
        <tr>
          <th>SR NO</th>
          <th>SPACE CRAFTS</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((d) => (
          <tr>
            <td>{d.id}</td>
            <td>{d.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default IsroTable;
