export default class bookingController {
  constructor() {
    this.date = new Date();
    this.noOfPeople = [
      "1 person",
      "2 people",
      "3 people",
      "4 people",
      "5 people",
      "6 people"
    ];
    this.selectedPeople = this.noOfPeople[1];
  }

  $onInit() {}

  onTimeSet(newDate, oldDate) {
    console.log(newDate);
    this.date = newDate;
  }
}
bookingController.$inject = [];
