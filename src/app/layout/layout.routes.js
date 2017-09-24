routes.$inject = ["$stateProvider"];

export default function routes($stateProvider) {
  $stateProvider.state("layout", {
    url: "/",
    component: "layoutComponent"
  });
}
