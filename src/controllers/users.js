import viewUSers from "../views/users.html";
import { getUSers } from "../api";

const pageUsers = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewUSers;

  const userElement = divElement.querySelector("#list-users");
  const users = await getUSers();
  console.log("users", users);

  const totalPost = divElement.querySelector("#total-users");
  totalPost.innerHTML = users.length;

  users.forEach(({ name, username, email }) => {
    userElement.innerHTML += `
      <li class="list-group-item border-primary bg-dark text-white"> 
        <h5>${name}</h5>
        <p>${username}<br />${email}</p>   
      </li>`;
  });

  return divElement;
};

export default pageUsers;
