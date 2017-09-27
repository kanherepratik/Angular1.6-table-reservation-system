import angular from "angular";
import "bootstrap/dist/css/bootstrap.css";
import "../style/app.css";
import uirouter from "@uirouter/angularjs";
import layout from "./layout";
import singleRestaurant from "./features/singleRestaurant";
import routing from "../app.config";
// import home from "./features/h ome";

const MODULE_NAME = "app";
const component = [singleRestaurant, layout];

angular.module(MODULE_NAME, [uirouter, ...component]).config(routing);

export default MODULE_NAME;
