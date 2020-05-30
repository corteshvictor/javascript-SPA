import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import router from "./router";

router(location.hash);
addEventListener("hashchange", () => {
  router(location.hash);
});
