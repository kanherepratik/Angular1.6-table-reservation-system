const zip = "60654";
export default class layoutController {
  constructor(locationService, dataService) {
    this.locationService = locationService;
    this.dataService = dataService;
    this.restaurant = [];
    this.totalPage = this.restaurant.length; //total records
    this.currentPage = 1;
    this.maxSize = 15; //max number of records per page
    this.currPage = this.currentPage;
    this.per_page = this.maxSize;
  }

  $onInit() {
    this.locationService.getLocation().then(res => {
      this.location = res;
      // let zip = this.location.zipcode;
      this.dataService
        .getData(zip, this.currPage, this.per_page, "Chicago")
        .then(res => {
          // console.log(res.data);
          this.restaurant = res.data.restaurants;
          this.totalPage = res.data.total_entries;
        });
    });
  }
  pageChanged() {
    this.currPage = this.currentPage;
    this.dataService
      .getData(zip, this.currPage, this.per_page, "Chicago")
      .then(res => {
        console.log(res.data);
        this.restaurant = res.data.restaurants;
        this.totalPage = res.data.total_entries;
      });
  }
  showBooking() {
    if (this.restaurant.length) return true;
    return false;
  }
}
layoutController.$inject = ["locationService", "dataService"];
