const fetchData = async (schemeCode) => {
  try {
    const res = await fetch('https://api.mfapi.in/mf');
    const json = await res.json();
    const data = json;

    const scheme = data.find((d) => d.schemeCode == schemeCode);
    console.log(scheme);
    return scheme;
  } catch (e) {
    console.log(e);
  }
};

document.getElementById('submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const schemeCode = document.getElementById('code').value;

  if (!schemeCode) {
    document.querySelector('.error').innerHTML =
      'No Data Fund, enter correct scheme code!!';
  }
  try {
    const scheme = await fetchData(schemeCode);

    const tr = document.createElement('tr');
    const schemeCodetd = document.createElement('td');
    schemeCodetd.innerText = scheme.schemeCode;
    tr.appendChild(schemeCodetd);
    const schemeNametd = document.createElement('td');
    schemeNametd.innerText = scheme.schemeName;
    tr.appendChild(schemeNametd);

    document.querySelector('table').appendChild(tr);

    document.getElementById('code').value = '';
    document.querySelector('.error').innerHTML = '';
  } catch (error) {
    console.log(error);
  }
});
