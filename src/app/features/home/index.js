import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./home.routes";
import randomNames from "../../../services/randomNames.service";
import greeting from "../../../directives/greeting.directive";

import HomeController from "./home.controller";
import templateUrl from "./home.html";

var HomeComponent = {
  template: templateUrl,
  controller: HomeController
};

export default angular
  .module("app.home", [uirouter, randomNames, greeting])
  .config(routing)
  .component("homeComponent", HomeComponent).name;
