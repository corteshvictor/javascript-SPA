import viewSpinner from "../views/spinner.html";

const Spinner = () => {
  const divElement = document.createElement("div");
  divElement.classList = "spinner";
  divElement.innerHTML = viewSpinner;

  return divElement;
};

export default Spinner;
