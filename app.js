function newReq(id) {
    var req = new XMLHttpRequest();

    req.open('GET', `https://api.github.com/users/${id}`);
    req.send();

    req.onload = function() {
        return JSON.parse(this.responseText).public_repos;

    }
}

var app1 = angular.module('app1', []);
app1.controller('mainCtrl', function($scope, $http) {
    $scope.userInput = '';
    $scope.reposCount = '';


    $scope.updateValue = function() {
        let inp = $scope.userInput;

        $http({
            method: 'GET',
            url: `https://api.github.com/users/${inp}/repos`
        }).then(function success(res) {
            $scope.reposCount = `${res.data.length} repos found: `;
            res.data.forEach(function(element) {
                $scope.reposCount += element.name + ", ";

            }, this);

        }, function error(response) {
            $scope.reposCount = `User '${inp}' has no public repos`;
        });
    }
})