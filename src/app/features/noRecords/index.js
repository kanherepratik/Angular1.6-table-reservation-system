import angular from "angular";
import templateUrl from "./noRecords.html";
import "./noRecords.css";

var noRecordsComponent = {
  template: templateUrl
};

export default angular
  .module("app.noRecords", [])
  .component("noRecordsComponent", noRecordsComponent).name;
