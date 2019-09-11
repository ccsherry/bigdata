
app.controller('js.roleController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
 
// $(document).ready(function() {
//         document.getElementById('#example-getting-started').multiselect();
//     });

    $scope.$on('$viewContentLoaded', function() {
      document.getElementById('#example-getting-started').multiselect();
    });


 }]) ; 