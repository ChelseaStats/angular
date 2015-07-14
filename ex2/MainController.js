(function () {
    var MainController = function ($scope, $interval, $location) {

        $scope.search = function (username) {
            $location.path("/user/" + username);
        };

        $scope.username = "ChelseaStats";
    };

    var app = angular.module("githubViewer");
    app.controller("MainController", MainController);
}());
