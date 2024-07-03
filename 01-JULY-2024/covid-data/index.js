async function fetchData() {
  const res = await fetch('https://data.covid19india.org/data.json');
  const json = await res.json();
  const data = json.statewise;
  console.log(data);
  printData(data);
}
function printData(data) {
  data.map((d, index) => {
    const tr = document.createElement('tr');
    const i = document.createElement('td');
    const state = document.createElement('td');
    const confirmed = document.createElement('td');
    const recovered = document.createElement('td');
    const deaths = document.createElement('td');

    i.innerHTML = index + 1;
    tr.appendChild(i);
    state.innerHTML = d.state;
    tr.appendChild(state);
    confirmed.innerHTML = d.confirmed;
    tr.appendChild(confirmed);
    recovered.innerHTML = d.recovered;
    tr.appendChild(recovered);
    deaths.innerHTML = d.deaths;
    tr.appendChild(deaths);

    document.querySelector('table').appendChild(tr);
  });
}

fetchData();

// tr.innerHTML = `
//     <td>${index + 1}</td>
//     <td>${d.state}</td>
//     <td>${d.confirmed}</td>
//     <td>${d.recovered}</td>
//     <td>${d.deaths}</td>
//     `;
