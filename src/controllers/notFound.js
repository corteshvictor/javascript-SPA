import viewNotFound from "../views/notFound.html";

const pageNotFound = () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = viewNotFound;

  return divElement;
};

export default pageNotFound;
