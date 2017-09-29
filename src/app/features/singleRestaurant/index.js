import angular from "angular";
import uirouter from "@uirouter/angularjs";
import dataService from "../../../services/data.service";
import routing from "./singleRestaurant.routes";
import singleRestaurantController from "./singleRestaurant.controller";
import templateUrl from "./singleRestaurant.html";
import dropdown from "angular-ui-bootstrap/src/dropdown";
import timepicker from "angular-bootstrap-datetimepicker";

import "angular-bootstrap-datetimepicker/src/js/datetimepicker.templates";
import "angular-bootstrap-datetimepicker/src/css/datetimepicker.css";
import "./singleRestaurant.css";

var singleRestaurantComponent = {
  template: templateUrl,
  controller: singleRestaurantController
};

export default angular
  .module("app.singleRestaurant", [uirouter, dataService, dropdown, timepicker])
  .config(routing)
  .component("singleRestaurantComponent", singleRestaurantComponent).name;
