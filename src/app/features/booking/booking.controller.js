export default class bookingController {
  constructor($stateParams) {
    this.param = $stateParams;
    this.isSuccess = true;
  }
  /* 
  beautyEncode(string) {
    string = string.replace(/ /g, "");
    return string;
  } */
  completeReserve() {
    this.isSuccess = !this.isSuccess;
  }
}
bookingController.$inject = ["$stateParams"];
