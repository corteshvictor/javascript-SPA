import viewHome from "../views/home.html";

const pageHome = () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = viewHome;

  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("Click");
  });
  return divElement;
};

export default pageHome;
