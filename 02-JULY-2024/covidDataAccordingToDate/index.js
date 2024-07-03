const fetchData = async (date) => {
  try {
    const res = await fetch('https://data.covid19india.org/data.json');
    const json = await res.json();
    const data = json.cases_time_series;

    const dataByDate = data.find((d) => d?.date === date); // find the data by date
    if (!dataByDate) {
      alert(
        'Kindly give input in this format "15 May 2021" else data not found!'
      );
    }
    return {
      dailyconfirmed: dataByDate.dailyconfirmed,
      dailydeceased: dataByDate.dailydeceased,
    };
  } catch (e) {
    console.log(e);
  }
};

document.getElementById('submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  try {
    const { dailyconfirmed, dailydeceased } = await fetchData(date);
    console.log(dailyconfirmed, dailydeceased);

    const tr = document.createElement('tr');
    const datetd = document.createElement('td');
    datetd.innerText = date;
    tr.appendChild(datetd);
    const dailyconfirmedtd = document.createElement('td');
    dailyconfirmedtd.innerText = dailyconfirmed;
    tr.appendChild(dailyconfirmedtd);
    const dailydeceasedtd = document.createElement('td');
    dailydeceasedtd.innerText = dailydeceased;
    tr.appendChild(dailydeceasedtd);

    document.querySelector('table').appendChild(tr);

    document.getElementById('date').value = '';
  } catch (error) {
    console.log(error);
  }
});
