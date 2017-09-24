import angular from "angular";
import "bootstrap/dist/css/bootstrap.css";
// import accordion from "angular-ui-bootstrap/src/accordion";
import "../style/app.css";
import uirouter from "@uirouter/angularjs";
import routing from "../app.config";
import home from "./features/home";
import layout from "./layout";

const MODULE_NAME = "app";

angular.module(MODULE_NAME, [uirouter, layout]).config(routing);

export default MODULE_NAME;
