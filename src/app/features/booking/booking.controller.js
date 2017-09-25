export default class bookingController {
  constructor(locationService, dataService) {
    this.locationService = locationService;
    this.dataService = dataService;
    this.date = new Date();
    this.noOfPeople = [
      "1 person",
      "2 people",
      "3 people",
      "4 people",
      "5 people",
      "6 people"
    ];
    this.restuarant = [];
    this.location = {};
    this.selectedPeople = this.noOfPeople[1];
    this.supported = "";
  }

  $onInit() {
    this.locationService.getLocation().then(res => {
      this.location = res;
      this.dataService.getData("60654").then(res => {
        res.data.restaurants.map(restuarant => {
          this.restuarant.push(restuarant);
        });
      });
    });
  }

  /* getData() {
    data();
    this.dataService.getData().then(res => {
      // console.log(res);
      res.data.restaurants.map(restuarant => {
        if (restuarant.postal_code === this.location.zipcode) {
          console.log(restuarant);
          this.restuarant.push(restuarant);
        }
      });
    });
  } */
  onTimeSet(newDate, oldDate) {
    console.log(newDate);
    this.date = newDate;
  }
}
bookingController.$inject = ["locationService", "dataService"];
