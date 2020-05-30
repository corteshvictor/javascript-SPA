import { Home, Posts, NotFound } from "../controllers";

let content = document.getElementById("root");

const router = async (route) => {
  content.innerHTML = "";
  switch (route) {
    case "":
    case "#/":
      return content.appendChild(Home());

    case "#/posts":
      return content.appendChild(await Posts());

    //case "#/products":
    // return console.log("products");

    default:
      return content.appendChild(NotFound());
  }
};

export default router;
