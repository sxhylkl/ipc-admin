define(function(require){var app=require("app"),loadCss=require("loadCss");require("myService"),loadCss.loadCss(""),app.controller("addIpcController",function($scope,myService){myService.getJson("kinzo-cms/device/devType").success(function(data){$scope.devType=data.devType}),$scope.ipcInfo=null,$scope.submitNewIpc=function(){console.log($scope.ipcInfo),myService.getJson("kinzo-cms/device/ipcs",$scope.ipcInfo,"GET").success(function(data){alert("提交成功"),$scope.ipcInfo=null})}})});