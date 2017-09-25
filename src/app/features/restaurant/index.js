import angular from "angular";

import locationService from "../../../services/location.service";
import restaurantController from "./restaurant.controller";
import templateUrl from "./restaurant.html";
// import "./booking.css";

var restaurantComponent = {
  template: templateUrl,
  controller: restaurantController
};

export default angular
  .module("app.restaurant", [locationService])
  .component("restaurantComponent", restaurantComponent).name;
