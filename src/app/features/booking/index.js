import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./booking.routes";
import dropdown from "angular-ui-bootstrap/src/dropdown";
import timepicker from "angular-bootstrap-datetimepicker";
// import "datetimepicker.templates.js";
import "angular-bootstrap-datetimepicker/src/js/datetimepicker.templates";
import "angular-bootstrap-datetimepicker/src/css/datetimepicker.css";
import "./booking.css";

// import randomNames from "../../../services/randomNames.service";
// import greeting from "../../../directives/greeting.directive";

import bookController from "./booking.controller";
import templateUrl from "./booking.html";

var bookingComponent = {
  template: templateUrl,
  controller: bookController
};

export default angular
  .module("app.book", [uirouter, dropdown, timepicker])
  .component("bookingComponent", bookingComponent).name;
