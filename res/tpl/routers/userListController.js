define(function(require){var app=require("app");require("myService"),require("load"),loadCss=require("loadCss"),loadCss.loadCss("res/css/userList.css"),app.controller("userListController",function($scope,myService){$scope.dateOption={startTime:"",endTime:""},$scope.startDateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.endDateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.updateMin=function(){$scope.endDateOptions.minDate=$scope.dateOption.startTime,$scope.pageInfo.startTime=isNaN(new Date($scope.dateOption.startTime).getTime())?"":new Date($scope.dateOption.startTime).getTime()},$scope.updateMax=function(){$scope.startDateOptions.maxDate=$scope.dateOption.endTime,$scope.pageInfo.endTime=isNaN(new Date($scope.dateOption.endTime).getTime())?"":new Date($scope.dateOption.endTime).getTime()},$scope.startOpen=function(){$scope.startPopupOpened=!0},$scope.endOpen=function(){$scope.endPopupOpened=!0},$scope.startPopupOpened=!1,$scope.endPopupOpened=!1;var showUserList=function(url,requestData,method){myService.getJson(url,requestData,method).success(function(data){console.log(data),load.close(),$scope.userInfoList=data.userInfoList,$scope.totalCount=data.totalCount,$scope.maxSize=5,$scope.startPage=$scope.pageInfo.startPage})};$scope.pageInfo={loginType:"",loginName:"",p2pId:"",startTime:"",endTime:"",startPage:1,pageSize:2};var url="res/json/userList.json";showUserList(url,$scope.pageInfo),$scope.pageChange=function(){console.log($scope.startPage),$scope.pageInfo.startPage=$scope.startPage,showUserList(url,$scope.pageInfo)},$scope.goSearch=function(){$scope.pageInfo.startPage=1,console.log($scope.pageInfo),showUserList(url,$scope.pageInfo)}})});