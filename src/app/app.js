import angular from "angular";
import "bootstrap/dist/css/bootstrap.css";
import "../style/app.css";
// import AppComponent from "./app.component";
import uirouter from "@uirouter/angularjs";
import routing from "../app.config";
import home from "./features/home";

const MODULE_NAME = "app";

angular.module(MODULE_NAME, [uirouter, home]).config(routing);

export default MODULE_NAME;
