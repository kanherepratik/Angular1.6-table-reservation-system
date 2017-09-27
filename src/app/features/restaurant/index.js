import angular from "angular";

import restaurantController from "./restaurant.controller";
import templateUrl from "./restaurant.html";
import "./restaurant.css";
import noRecords from "../noRecords";
import pagination from "angular-ui-bootstrap/src/pagination";

var restaurantComponent = {
  template: templateUrl,
  controller: restaurantController,
  bindings: {
    rest: "<"
  }
};

export default angular
  .module("app.restaurant", [pagination, noRecords])
  .component("restaurantComponent", restaurantComponent).name;
