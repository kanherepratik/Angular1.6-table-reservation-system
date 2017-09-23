routes.$inject = ["$stateProvider"];
// import homeComponent from "./home.component";

export default function routes($stateProvider) {
  $stateProvider.state("home", {
    url: "/",
    component: "homeComponent"
  });
}
