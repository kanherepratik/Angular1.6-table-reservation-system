import angular from "angular";

class Data {
  constructor($http) {
    this._$http = $http;
    this.appUrl = "https://opentable.herokuapp.com/api/";
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
  getByName(name) {
    return this._$http.get(this.appUrl + "restaurants?name=" + name);
  }
  getSingleRestData(id) {
    return this._$http.get(this.appUrl + "restaurants/" + id);
  }
  getSearchData(param) {
    return this._$http.get(this.appUrl + "restaurants?" + param + "=" + param);
  }
}

export default angular.module("services.data", []).service("dataService", Data)
  .name;
