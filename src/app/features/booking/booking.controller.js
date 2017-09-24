export default class bookingController {
  constructor() {
    this.name = "World";
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
  onTimeSet(newDate, oldDate) {
    console.log(newDate);
    this.date = newDate;
    // console.log(oldDate);
  }
  /* changeName() {
    this.name = "Hello World";
  }
  randomName() {
    this.name = this.random.getName();
  } */
}
bookingController.$inject = [];
