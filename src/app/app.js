import angular from "angular";
import "bootstrap/dist/css/bootstrap.css";
import "../style/app.css";
import uirouter from "@uirouter/angularjs";
import layout from "./layout";
import singleRestaurant from "./features/singleRestaurant";
import booking from "./features/booking";
import routing from "../app.config";
// import home from "./features/h ome";

const MODULE_NAME = "app";
const component = [singleRestaurant, layout, booking];

angular.module(MODULE_NAME, [uirouter, ...component]).config(routing);

export default MODULE_NAME;
