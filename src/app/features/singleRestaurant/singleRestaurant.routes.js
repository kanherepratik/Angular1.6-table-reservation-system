routes.$inject = ["$stateProvider"];

export default function routes($stateProvider) {
  $stateProvider.state("viewRest", {
    url: "/:id",
    component: "singleRestaurantComponent"
  });
}
