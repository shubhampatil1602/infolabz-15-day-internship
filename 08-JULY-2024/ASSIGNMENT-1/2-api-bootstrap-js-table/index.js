const fetchData = async () => {
  const response = await fetch(
    'https://inshortsapi.vercel.app/news?category=sports'
  );
  const json = await response.json();
  const data = json.data;
  printTable(data);
};

const printTable = (data) => {
  const tbody = document.getElementById('tbody');
  data.forEach((item, index) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = index + 1;
    const td2 = document.createElement('td');
    td2.innerText = item.title;
    const td3 = document.createElement('td');
    td3.innerText = item.author;
    const td4 = document.createElement('td');
    td4.innerText = item.time;
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);
  });
};

fetchData();
