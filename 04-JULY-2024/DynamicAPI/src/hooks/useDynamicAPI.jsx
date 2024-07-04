import { useEffect, useState } from 'react';

const useDynamicAPI = () => {
  const [collegeData, setCollegeData] = useState([]);

  const fetchCollegeData = async (search) => {
    const data = await fetch(
      `http://universities.hipolabs.com/search?country=${search}`
    );
    const json = await data.json();
    setCollegeData(json);
  };
  useEffect(() => {
    fetchCollegeData();
  }, []);

  return { fetchCollegeData, collegeData };
};

export default useDynamicAPI;
