import angular from "angular";

import restaurantController from "./restaurant.controller";
import templateUrl from "./restaurant.html";
import "./restaurant.css";
import pagination from "angular-ui-bootstrap/src/pagination";

var restaurantComponent = {
  template: templateUrl,
  controller: restaurantController,
  bindings: {
    rest: "<"
  }
};

export default angular
  .module("app.restaurant", [pagination])
  .component("restaurantComponent", restaurantComponent).name;
