define(function(require){var app=require("app");require("myService");require("loadCss");app.controller("appInfoController",function($scope,myService,$stateParams){myService.getJson("kinzo-cms/appInfo/IOS/"+$stateParams.appId).success(function(data){$scope.appVerList=data.appVerList})})});