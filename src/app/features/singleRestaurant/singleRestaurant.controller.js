export default class singleRestaurantController {
  constructor($stateParams, dataService, $filter) {
    console.log($stateParams.id);
    this._$filter = $filter;
    this.restId = $stateParams.id;
    this.dataService = dataService;
    this.restaurant = [];
    this.date = new Date();
    this.noOfPeople = [
      "1 person",
      "2 people",
      "3 people",
      "4 people",
      "5 people",
      "6 people",
      "7 people",
      "8 people",
      "9 people",
      "10 people"
    ];
    this.selectedPeople = this.noOfPeople[1];
    this.showTimeSlots = false;
    this.slots = [
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "6:00 PM",
      "8:00 PM",
      "10:00 PM"
    ];
  }
  $onInit() {
    this.dataService.getSingleRestData(this.restId).then(res => {
      this.restaurant = res.data;
      console.log(this.restaurant);
    });
  }
  onTimeSet(newDate, oldDate) {
    console.log(newDate);
    this.date = newDate;
    /* let time = newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });*/
  }
  startDateBeforeRender($dates) {
    const todaySinceMidnight = new Date();
    todaySinceMidnight.setUTCHours(0, 0, 0, 0);
    $dates
      .filter(date => date.utcDateValue < todaySinceMidnight.getTime())
      .forEach(date => (date.selectable = false));
  }
  bookTable() {
    this.showTimeSlots = !this.showTimeSlots;
  }
  selectPeople(people) {
    console.log(people);
    this.selectedPeople = people;
  }
  formatDate(date) {
    date = this._$filter("date")(date, "fullDate");
    date = date.replace(/ /g, "");
    console.log(date);
    return date;
  }
}
singleRestaurantController.$inject = ["$stateParams", "dataService", "$filter"];
