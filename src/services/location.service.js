import angular from "angular";

class location {
  constructor($http) {
    this._$http = $http;
  }

  getLocation() {
    return this._$http.get("https://ipinfo.io");
  }
}

export default angular
  .module("services.location", [])
  .service("locationService", location).name;
