import angular from "angular";

class Data {
  constructor($http) {
    this._$http = $http;
    this.appUrl = "http://opentable.herokuapp.com/api/";
  }

  getData(zip, currPage, per_page, city) {
    if (!angular.isDefined(currPage)) currPage = 1;
    if (!angular.isDefined(per_page)) per_page = 15;
    return this._$http.get(
      this.appUrl +
        "restaurants?zip=" +
        zip +
        "&page=" +
        currPage +
        "&per_page=" +
        per_page +
        "&city=" +
        city
    );
  }
  getSingleRestData(id) {
    return this._$http.get(this.appUrl + "restaurants/" + id);
  }
}

export default angular.module("services.data", []).service("dataService", Data)
  .name;
