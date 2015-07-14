(function () {
    var github = function ($http) {
        var getUser = function (userName) {
            return $http.get("https://api.github.com/users/" + userName)
                        .then(function (response) {
                            return response.data;
                        });
        }

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                        .then(function (response) {
                            return response.data;
                        });
        }

        var getRepoDetails = function (username, reponame) {
            var url = "https://api.github.com/repos/" + reponame + "/" + username;
            return $http.get(url)
                        .then(function (response) {
                            return response.data;
                        });
        }

        var getCollaborators = function (username, reponame) {
            var url = "https://api.github.com/repos/" + reponame + "/" + username + "/collaborators";
            return $http.get(url)
                        .then(function (response) {
                            return response.data;
                        });
        }

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getCollaborators: getCollaborators
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);
}());
