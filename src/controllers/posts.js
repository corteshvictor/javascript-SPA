import viewPosts from "../views/posts.html";
import { getPosts } from "../api";

const pagePosts = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewPosts;

  const postElement = divElement.querySelector("#list-posts");
  const posts = await getPosts();

  const totalPost = divElement.querySelector("#total-posts");
  totalPost.innerHTML = posts.length;

  posts.forEach(({ title, body }) => {
    postElement.innerHTML += `
      <li class="list-group-item border-primary bg-dark text-white"> 
        <h5>${title}</h5>
        <p>${body}</p>    
      </li>`;
  });

  return divElement;
};

export default pagePosts;
