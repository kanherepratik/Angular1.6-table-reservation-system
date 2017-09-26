import angular from "angular";

class Data {
  constructor($http) {
    this._$http = $http;
    this.appUrl = "http://opentable.herokuapp.com/api/";
  }

  getData(zip, currPage, per_page) {
    return this._$http.get(
      this.appUrl +
        "restaurants?zip=" +
        zip +
        "&page=" +
        currPage +
        "&per_page=" +
        per_page
    );
  }
}

export default angular.module("services.data", []).service("dataService", Data)
  .name;
