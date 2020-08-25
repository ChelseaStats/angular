(function () {
    var UserController = function ($scope, github, $routeParams) {

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);
        };

        var onRepos = function (data) {
            $scope.repos = data;
        }

        var onError = function (response) {
            $scope.error = "An error occurred, please try again";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    var app = angular.module("githubViewer");
    app.controller("UserController", UserController);
}());
