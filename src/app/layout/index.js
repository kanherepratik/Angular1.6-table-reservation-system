import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./layout.routes";
import booking from "../features/booking";
import templateUrl from "./layout.html";

var layoutComponent = {
  template: templateUrl
};

export default angular
  .module("app.layout", [uirouter, booking])
  .config(routing)
  .component("layoutComponent", layoutComponent).name;
