routes.$inject = ["$stateProvider"];

export default function routes($stateProvider) {
  $stateProvider.state("reserve", {
    url: "/reserve?name&people&slot&date",
    component: "bookingComponent"
  });
}
