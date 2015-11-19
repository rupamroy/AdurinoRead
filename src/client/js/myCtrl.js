(function () {
    angular.module('myApp')
        .controller('myCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope'];

    function MyCtrl($scope) {
        $scope.content = "Data Log";

        var socket = io();
        $scope.dataArray = [];

        socket.on('Data Recieved', function (data) {
            $scope.dataArray.unshift(data);
            $scope.$apply();
        });
    }
})();