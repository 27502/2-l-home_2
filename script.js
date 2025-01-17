const userTableBody = document.getElementById('user-table-body');
const addUserBtn = document.getElementById('add-user-btn');

function renderUsers() {
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.address.city}</td>
      <td>${user.company.name}</td>
      <td>${user.website}</td>
    `;
    userTableBody.appendChild(row);
  });
}

addUserBtn.addEventListener('click', () => {
  const newUser = {
    id: users.length + 1,
    name: "New User",
    email: "newuser@gmail.com",
    phone: "+998901234567",
    address: "Samarkand, Registan St.",
    company: "New Company",
    website: "www.newcompany.uz"
  };
  users.push(newUser);
  renderUsers();
});

renderUsers();
