import { Home, Posts, NotFound, Spinner, Error, Users } from "../controllers";

let content = document.getElementById("root");

const router = async (route) => {
  content.innerHTML = "";
  switch (route) {
    case "":
    case "#/":
      return content.appendChild(Home());

    case "#/posts":
      try {
        content.appendChild(Spinner());
        const listPosts = await Posts();
        content.innerHTML = "";
        return content.appendChild(listPosts);
      } catch (error) {
        console.error(error);
        return content.appendChild(Error());
      }

    case "#/users":
      try {
        content.appendChild(Spinner());
        const listUsers = await Users();
        content.innerHTML = "";
        return content.appendChild(listUsers);
      } catch (error) {
        return content.appendChild(Error());
      }

    default:
      return content.appendChild(NotFound());
  }
};

export default router;
