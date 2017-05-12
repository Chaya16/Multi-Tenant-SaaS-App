var tenant = angular.module('tenantApp', [ 'ngRoute' ]);

tenant.controller("gradeController", function($scope, $http) {
    console.log("inside tenant controller");
});

tenant.config(function($routeProvider) {
    console.log("inside tenant route provider");

    $routeProvider.when("/tenant1", {
        templateUrl : "/templates/tenant1.html",
        controller : "tenant1_controller"

    }).when("/tenant2", {
        templateUrl : "/templates/tenant2.html",
        controller : "tenant2_controller"

    }).when("/tenant3", {
        templateUrl : "/templates/tenant3.html",
        controller : "tenant3_controller"

    }).when("/tenant4", {
        templateUrl : "/templates/tenant4.html",
        controller : "tenant4_controller"
    });

});

tenant.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

tenant.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, callbackfunc){
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(data){
                console.log("Uploaded");
                console.log(data);

                callbackfunc(data);
            })

            .error(function(){
            });
    }
}]);

tenant.controller("tenant1_controller",['$scope','$http', 'fileUpload', '$route', function($scope,$http, fileUpload, $route){
   console.log("tenant1_controller");
   $scope.graderChecked = true;
    $scope.msg = 'Grading Information for tenant 1'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://ec2-user@ec2-52-40-177-136.us-west-2.compute.amazonaws.com:5000/genUML";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.generateUML = function(){

    }

    $scope.submitGrades = function(){
    console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "T1",
            "tenant_table" : "tenant_1",
            "tenant_name" :"Foram Mehta",
            "scale" : "PointsScale(1-5)", 
            "grade" : $scope.grade,
            "complete" : $scope.complete,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgrader1',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);

tenant.controller("tenant2_controller",['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){
    console.log("tenant2_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading Information for tenant 2'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://ec2-34-210-109-137.us-west-2.compute.amazonaws.com:5000/genUML";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.generateUML = function(){

    }

    $scope.submitGrades = function(){
    console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "T2",
            "tenant_table" : "tenant_2",
            "tenant_name" :"Noopur Joshi",
            "scale" : "Letter Grade (A-F)", 
            "grade" : $scope.grade,
            "complete" : $scope.complete,
            "gradecomments" : $scope.gradecomments
        }

        $http({
            method : "POST",
            url : '/callgrader2',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);


tenant.controller("tenant3_controller",['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){
    console.log("tenant3_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading Information for tenant 3'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://ec2-user@ec2-54-69-78-148.us-west-2.compute.amazonaws.com:5000/genUML";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.generateUML = function(){

    }

    $scope.submitGrades = function(){
    console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "T3",
            "tenant_table" : "tenant_3",
            "tenant_name" :"Arun Kumar Chandramohan",
            "scale" : "Percent Scale", 
            "grade" : $scope.grade,
            "complete" : $scope.complete,
            "gradecomments" : $scope.gradecomments
           
        }

        $http({
            method : "POST",
            url : '/callgrader3',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);


tenant.controller("tenant4_controller",['$scope','$http', 'fileUpload', function($scope,$http, fileUpload){
    console.log("tenant4_controller");
    $scope.graderChecked = true;
    $scope.msg = 'Grading Information for tenant 4'
    $scope.uploadFile = function () {

        console.log("uploadFile");
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "http://ec2-52-41-162-190.us-west-2.compute.amazonaws.com:5000/genUML";
        fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
            console.log("callback from upload");
            console.log(data);
            $scope.umlimg = data.result
            $scope.graderChecked = true;
        });
    };

    $scope.generateUML = function(){

    }

    $scope.submitGrades = function(){
    console.log("submit grade");
        var tenant_data = {
            "tenant_id" : "T4",
            "tenant_table" : "tenant_4",
            "tenant_name" :"Karan Didwani",
            "scale" : "Letter Grade (A-F)", 
           "scale" : "PointsScale(1-10)", 
            "grade" : $scope.grade,
            "complete" : $scope.complete,
            "gradecomments" : $scope.gradecomments
            
        }

        $http({
            method : "POST",
            url : '/callgrader4',
            data : tenant_data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(data) {
            console.log("grading completed");
            $scope.msg = " Grading completed";
        }).error(function(error) {
            $scope.validlogin = true;
            $scope.invalid_login = true;
        });
    };

}]);
