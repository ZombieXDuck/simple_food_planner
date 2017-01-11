var app = angular.module("foodPlan", []);
app.controller("myCtrl", function($scope) {
  $scope.foods = [
    //{name:'Steak', calories:'340', protein:'40', carbs:'13', fat:'9'} //Test Case
  ];
  $scope.addFood = function () {
    $scope.error = " "; //reset error message
    if(!$scope.foodToAdd || !$scope.calsToAdd || !$scope.proToAdd || !$scope.carbsToAdd || !$scope.fatToAdd) //Check for empty input
    {
      $scope.error = "Please fill in all parts of the form";
      return;
    };
    $scope.foods.push({name:$scope.foodToAdd,calories:$scope.calsToAdd,protein:$scope.proToAdd,carbs:$scope.carbsToAdd,fat:$scope.fatToAdd}); //enter new food
    $scope.foodToAdd = '';$scope.calsToAdd = '';$scope.proToAdd='';$scope.carbsToAdd='';$scope.fatToAdd=''; //clear input boxes
    this.getTotals();
  }
  $scope.removeFood = function (i) { //remove food at index
    $scope.foods.splice(i, 1);
    this.getTotals();
  }
  $scope.getTotals = function () {  //Get Food Totals
    if($scope.foods.length <= 0) {$scope.totalCalories='';$scope.totalProtein='';$scope.totalCarbs='';$scope.totalFat='';}
    var tempCal=0;var tempPro=0;var tempCarb=0;var tempFat=0;
    for(i = 0; i<$scope.foods.length; i++)
    {
      tempCal += parseInt($scope.foods[i].calories);
      tempPro += parseInt($scope.foods[i].protein);
      tempCarb += parseInt($scope.foods[i].carbs);
      tempFat += parseInt($scope.foods[i].fat);
      $scope.totalCalories = tempCal;
      $scope.totalProtein = tempPro;
      $scope.totalCarbs = tempCarb;
      $scope.totalFat = tempFat;
    }
  }
});
