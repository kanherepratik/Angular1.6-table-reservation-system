import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./layout.routes";
import locationService from "../../services/location.service";
import dataService from "../../services/data.service";
import restaurant from "../features/restaurant";
import templateUrl from "./layout.html";
import layoutController from "./layout.controller.js";
import "./layout.css";

var layoutComponent = {
  template: templateUrl,
  controller: layoutController
};

export default angular
  .module("app.layout", [uirouter, restaurant, locationService, dataService])
  .config(routing)
  .component("layoutComponent", layoutComponent).name;
