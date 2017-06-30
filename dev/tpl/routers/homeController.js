/** * Created by zzq on 2017/5/3. */define(['app', 'loadCss', 'myService', 'dashBoard'], function (app, loadCss) {    //引入css    loadCss.loadCss('res/lib/zui/css/zui.min.css');    loadCss.loadCss('res/lib/zui/dashboard/zui.dashboard.min.css');    loadCss.loadCss('res/css/home.css');// todo 高度目前是同步改变，计划若找不到获取其他几个也改变的div的话就改源码为单独调整    app.controller('homeController', function ($scope, myService, $state, $timeout, data) {        console.log(data);        //ajax获取控制面板当前布局currentLayout        $scope.currentlayOut = [            {id: "userList", title:'用户列表', order: '1', colWidth: '8', height:"300px" , "sref": "userList",content: "userList"},            {id: "userInfo", title:"用户信息",order: '2', colWidth: '2',  height:"400px", "sref": "userInfo",content: "userInfo"},            {id: "productList", title:"产品列表",order: '3', colWidth: '4',  height:"500px", "sref": "ipcList",content: "productList"}        ];        //新增面板        $scope.newModule = {            colWidth:'',            title:'',            id:'',            colWidth: '',            height: 300,            sref:''        }        $scope.showModel = false;        $scope.addPanel = function(){            $scope.showModel = true;        };        $scope.ensure = function(){            console.log($scope.newModule);            //这里直接在页面内添加ng和zui会冲突，所以选择，先把数据提交到后台，再重新渲染当前路由            $scope.currentlayOut.push($scope.newModule);            $scope.showModel = false;            $scope.newModule = {                colWidth:'',                title:'',                id:'',                colWidth: '',                height: 300,                sref:''            };            //重新渲染当前路由            $state.reload('home')        };        $scope.exit = function(){            $scope.showModel = false;            $scope.newModule = {                colWidth:'',                title:'',                id:'',                colWidth: '',                height: 300,                sref:''            }        }    })    // 新增面板结束    //定义repeatFinish指令监测ng-repeat是否执行完成    app.directive('repeatFinish', function () {        return {            link: function (scope, element, attr) {                if (scope.$last == true) {                    //当repeat执行完之后再实例化dashboard                    panelRender(scope);                }            }        }    });    panelRender()    //panel配置    function panelRender(scope) {        // $('#my-dashboard').dashboard({        //     draggable: true,//是否可以拖拽        //     height: '300px',//全部面板默认高度        //     sensitive: false,//灵敏度判断        //     resizable: true,//是否允许拖拽改变尺寸        //     resizeMessage: true,//tips预览当前尺寸        //     afterPanelRemoved: function (id) {//面板移除后的回调函数        //         console.log('面板移除' + id);        //     },        //     panelRemovingTip: '{0}aaa',//移除面板前的确认消息{0}为面板名称        //     afterOrdered: function (newOrders) {//重新排序后的回调函数        //         console.log(newOrders)        //     },        //     afterRefresh: function () {//远程加载完成后的回调函数        //         console.log('远程加载完成')        //     },        //     onResize: function (e) {        //         console.log(e)        //     },        //     data: [{        //         id: 'panel1',   // 面板编号        //         colWidth: '4',  // 栅格尺寸        //         url: ''         // 设定面板远程内容更新地址        //     }, {        //         id: 'panel2',   // 面板编号        //         colWidth: '4',  // 栅格尺寸        //         url: ''         // 设定面板远程内容更新地址        //     }]        // });        $('#myDashboard').dashboard({            draggable: true,//是否可以拖拽            height:'300px',//全部面板默认高度            sensitive:false,//灵敏度判断            resizable:true,//是否允许拖拽改变尺寸            resizeMessage:true,//tips预览当前尺寸            data:[                {id:'panel1',colWidth:'4'},                {id:'panel2',colWidth:'3'},                {id:'panel3',colWidth:'2',content:'asd'}            ],            afterPanelRemoved:function(id){//面板移除后的回调函数                console.log('面板移除'+id);            },            panelRemovingTip:'确认移除？',//移除面板前的确认消息{0}为面板名称            afterOrdered:function (newOrders){//重新排序后的回调函数                console.log(newOrders)            },            onResize:function(e){                console.log(e);            },            afterRefresh:function (){//远程加载完成后的回调函数                console.log('远程加载完成')            },        });        console.log(2)    }})