let firstName = prompt("Input your first name");
let lastName = prompt("Input your last name");
let ageSt = prompt("Input your age");
let genderSt = prompt("Input your Gender");
let schoolSt = prompt("Input your School");
let addressSt = prompt("Input your Address");


while (firstName.length < 3) {
  firstName = prompt("Please input your first name, first name must larger than or equal 3 characters");
}

while (lastName.length < 3) {
  lastName = prompt("Please input your last name, last name must larger than or equal 3 characters");
}

while (addressSt.length > 40) {
  addressSt = prompt("Please input your Address, Address does not exceed 40 characters");
}
let tableUser = document.querySelector(`#tableUser`);
console.log(tableUser);
tableUser.innerHTML =
  `<table>
  <tr>
    <th>First name</th>
    <td>${firstName}</td>
  </tr>
  <tr>
    <th>Last name</th>
    <td>${lastName}</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>${ageSt}</td>
  </tr>
  <tr>
    <th>Gender</th>
    <td>${genderSt}</td>
  </tr>
  <tr>
    <th>School</th>
  <td>${schoolSt}</td>
  </tr>
  <tr>
    <th>Address</th>
    <td>${addressSt}</td>
  </tr>
</table>
  `
;