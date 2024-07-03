const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;

  printData(name, email, gender, city, address);

  form.reset();

  // console.log(name);
  // console.log(email);
  // console.log(gender.value);
  // console.log(city);
  // console.log(address);
});

const printData = (name, email, gender, city, address) => {
  const table = document.querySelector('table');
  const tr = document.createElement('tr');

  const nameData = document.createElement('td');
  nameData.innerHTML = name;
  const emailData = document.createElement('td');
  emailData.innerHTML = email;
  const genderData = document.createElement('td');
  genderData.innerHTML = gender.value;
  const cityData = document.createElement('td');
  cityData.innerHTML = city;
  const addressData = document.createElement('td');
  addressData.innerHTML = address;

  tr.appendChild(nameData);
  tr.appendChild(emailData);
  tr.appendChild(genderData);
  tr.appendChild(cityData);
  tr.appendChild(addressData);

  table.appendChild(tr);
};
