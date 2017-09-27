import angular from "angular";

import dropdown from "angular-ui-bootstrap/src/dropdown";
import timepicker from "angular-bootstrap-datetimepicker";

import "angular-bootstrap-datetimepicker/src/js/datetimepicker.templates";
import "angular-bootstrap-datetimepicker/src/css/datetimepicker.css";
import "./booking.css";

import bookController from "./booking.controller";
import templateUrl from "./booking.html";

var bookingComponent = {
  template: templateUrl,
  controller: bookController
};

export default angular
  .module("app.book", [dropdown, timepicker])
  .component("bookingComponent", bookingComponent).name;
