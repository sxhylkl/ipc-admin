/** * Created by zzq on 2017/5/3. */define(function (require){    //加载所需模块    var app = require('app');    require('myService');    var loadCss = require('loadCss');        //控制器    app.controller('firmwareInfoController', function ($scope, myService)    {        //初始化设置表单为disabled        $scope.inputCan = true;        //查询当前固件版本信息        myService.getJson('/kinzo-cms/current-firmwareInfo')            .success(function (data)            {                $scope.backupFirmwareInfo = data;                $scope.firmwareInfo = data;            });                //修改当前版本信息        $scope.changeCurrentFirmwareInfo = function ()        {            $scope.inputCan = false;        };        //修改有误在提交前重置        $scope.resetCurrentFirmwareInfo = function(){            $scope.firmwareInfo = $scope.backupFirmwareInfo;            console.log($scope.backupFirmwareInfo);        }        //提交并设置为禁用        $scope.updateCurrentFirmwareInfo = function(){                        $scope.inputCan = true;        };            })})