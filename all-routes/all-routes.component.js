// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', [
    'getRoutesListSvc',
    'numberConversionFtl',
    'numberUnitsFtl',
    'organiserNameFtl',
    'organiserIconFtl'
  ])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    css: 'all-routes/all-routes.css',
    controller: allRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function allRoutesController(getRoutesListSvc, $window) {
  getRoutesListSvc.getPosts().then(response => {
    this.routes = response.data;
  });

  this.goToUrl = goToUrl;
  function goToUrl(url) {
    // $window.location.href = url;
    $window.open(url,'_blank');
    // console.log("goToUrl activated at " +url);
  }

  this.orderBy = "-created_at";
  console.log("Original order is " +this.orderBy);

  this.changeOrderBy = changeOrderBy;
  function changeOrderBy(criteria) {
    console.log("Change order. Order by " + criteria);
    this.orderBy = criteria;
    // console.log("order is " +allRoutesCtrl.orderBy);
  }
};
