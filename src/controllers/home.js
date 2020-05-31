import viewHome from "../views/home.html";

const pageHome = () => {
  let display = false;
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = viewHome;

  const btnElement = divElement.querySelector("#btnClick");
  const articleElement = divElement.querySelector("#article");

  btnElement.addEventListener("click", () => {
    display = !display;
    articleElement.style.display = display ? "block" : "none";
    btnElement.innerHTML = display ? "Hide article" : "Show article";
  });
  return divElement;
};

export default pageHome;
