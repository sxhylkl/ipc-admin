/** * Created by zzq on 2017/5/3. */define(['app', 'loadCss', 'myService', 'dashBoard'], function (app, loadCss) {    loadCss.loadCss('res/lib/zui/css/zui.min.css');    loadCss.loadCss('res/lib/zui/dashboard/zui.dashboard.min.css');    loadCss.loadCss('res/css/home.css');//引入css    app.controller('homeController', function ($scope, myService, $timeout, data) {        console.log(data);        //ajax获取控制面板当前布局currentLayout        $scope.currentlayOut = [            {id: "userList", order: '1', colWidth: '8', height: 300, "name": "用户列表", "sref": "userList",},            {id: "userInfo", order: '2', colWidth: '2', height: 300, "name": "用户详情", "sref": "userInfo",},            {id: "productList", order: '3', colWidth: '4', height: 300, "name": "产品列表", "sref": "ipcList",}        ];    })    //定义repeatFinish指令监测ng-repeat是否执行完成    app.directive('repeatFinish', function () {        return {            link: function (scope, element, attr) {                console.log(scope.$index)                if (scope.$last == true) {                    panelRender(scope);                }            }        }    });    //panel配置    function panelRender(scope){        console.log(scope.currentlayOut);        $('#dashboard').dashboard({            draggable: true,//是否可以拖拽            height: '300px',//全部面板默认高度            sensitive: false,//灵敏度判断            resizable: true,//是否允许拖拽改变尺寸            resizeMessage: true,//tips预览当前尺寸            afterPanelRemoved: function (id) {//面板移除后的回调函数                console.log('面板移除' + id);            },            panelRemovingTip: '{0}aaa',//移除面板前的确认消息{0}为面板名称            afterOrdered: function (newOrders) {//重新排序后的回调函数                console.log(newOrders)            },            afterRefresh: function () {//远程加载完成后的回调函数                console.log('远程加载完成')            },            onResize: function (e) {                console.log(e)            }        });    }})