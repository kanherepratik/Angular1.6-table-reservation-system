export default class singleRestaurantController {
  constructor($stateParams, dataService) {
    console.log($stateParams.id);
    this.restId = $stateParams.id;
    this.dataService = dataService;
    this.restaurant = [];
  }
  $onInit() {
    this.dataService.getSingleRestData(this.restId).then(res => {
      this.restaurant = res.data;
      console.log(this.restaurant);
    });
  }
}
singleRestaurantController.$inject = ["$stateParams", "dataService"];
