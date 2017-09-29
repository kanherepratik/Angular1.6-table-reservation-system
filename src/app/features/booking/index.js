import angular from "angular";
import uirouter from "@uirouter/angularjs";
import routing from "./booking.routes";

import "./booking.css";

import bookController from "./booking.controller";
import templateUrl from "./booking.html";

var bookingComponent = {
  template: templateUrl,
  controller: bookController
};

export default angular
  .module("app.book", [uirouter])
  .config(routing)
  .component("bookingComponent", bookingComponent).name;
