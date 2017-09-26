export default class restaurantController {
  $onInit() {
    this.restaurant = [];
    this.restaurant = this.rest;
    // console.log(this.restaurant);
  }
  $onChanges(changes) {
    if (changes) {
      this.restaurant = this.rest;
    }
  }
}
restaurantController.$inject = [];
