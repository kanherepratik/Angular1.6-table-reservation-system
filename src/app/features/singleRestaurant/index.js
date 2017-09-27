import angular from "angular";
import uirouter from "@uirouter/angularjs";
import dataService from "../../../services/data.service";
import routing from "./singleRestaurant.routes";
import singleRestaurantController from "./singleRestaurant.controller";
import booking from "../booking";
import templateUrl from "./singleRestaurant.html";
import "./singleRestaurant.css";

var singleRestaurantComponent = {
  template: templateUrl,
  controller: singleRestaurantController
};

export default angular
  .module("app.singleRestaurant", [uirouter, dataService, booking])
  .config(routing)
  .component("singleRestaurantComponent", singleRestaurantComponent).name;
