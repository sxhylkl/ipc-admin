/** * Created by zzq on 2017/4/24. */define(function (require){    //引入依赖    var app = require('app');    var loadCss = require('loadCss');    require('myService');    loadCss.loadCss('');        app.controller('addIpcController', function ($scope, myService)    {        //获取devType地址        var url = "kinzo-cms/device/devType";        //提交地址        var postUrl = 'kinzo-cms/device/ipcs';        //获取devType        myService.getJson(url)            .success(function (data)            {                $scope.devType = data.devType;            });                //提交数据        $scope.ipcInfo = null;        $scope.submitNewIpc = function ()        {            console.log($scope.ipcInfo);            myService.getJson(postUrl,$scope.ipcInfo,'POST')                .success(function(data){                    layer.msg('提交成功',{icon:1,time:1500});                    $scope.ipcInfo = null;                })        };    })})