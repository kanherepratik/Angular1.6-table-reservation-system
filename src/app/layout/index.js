import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./layout.routes";
import booking from "../features/booking";
import restaurant from "../features/restaurant";
import templateUrl from "./layout.html";
import layoutController from "./layout.controller.js";

var layoutComponent = {
  template: templateUrl,
  controller: layoutController
};

export default angular
  .module("app.layout", [uirouter, booking, restaurant])
  .config(routing)
  .component("layoutComponent", layoutComponent).name;
