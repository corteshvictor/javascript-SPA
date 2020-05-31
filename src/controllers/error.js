import viewError from "../views/Error.html";

const pageError = () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = viewError;

  return divElement;
};

export default pageError;
