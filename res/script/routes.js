define(["require","app"],function(require,app){app.run(function($rootScope,$state,$log){$rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){$rootScope.loadRouter=layer.load(1,{shade:[.5,"#000"]})}),$rootScope.$on("$stateChangeSuccess",function(event,toState,toParams,fromState,fromParams){console.log("stateChangeSuccess"),layer.close($rootScope.loadRouter)})}).config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{url:"/home",views:{"":{templateUrl:"res/tpl/routers/home.html",controllerUrl:"tpl/routers/homeController",controller:"homeController"},"userList@home":{templateUrl:"res/tpl/routers/userList.html",controllerUrl:"tpl/routers/userListController",controller:"userListController"},"addUser@home":{templateUrl:"res/tpl/routers/addUser.html",controllerUrl:"tpl/routers/addUserController",controller:"addUserController"},"userInfo@home":{templateUrl:"res/tpl/routers/userInfo.html",controllerUrl:"tpl/routers/userInfoController",controller:"userInfoController"},"ipcList@home":{templateUrl:"res/tpl/routers/ipcList.html",controllerUrl:"tpl/routers/ipcListController",controller:"ipcListController"},"addIpc@home":{templateUrl:"res/tpl/routers/addIpc.html",controllerUrl:"tpl/routers/addIpcController",controller:"addIpcController"},"ipcInfo@home":{templateUrl:"res/tpl/routers/ipcInfo.html",controllerUrl:"tpl/routers/ipcInfoController",controller:"ipcInfoController"},"devTypeList@home":{templateUrl:"res/tpl/routers/devTypeList.html",controllerUrl:"tpl/routers/devTypeListController",controller:"devTypeListController"},"firmwareInfo@home":{templateUrl:"res/tpl/routers/firmwareInfo.html",controllerUrl:"tpl/routers/firmwareInfoController",controller:"firmwareInfoController"}}}).state("userList",{url:"/userlist",templateUrl:"res/tpl/routers/userList.html",controllerUrl:"tpl/routers/userListController",controller:"userListController"}).state("addUser",{url:"/addUser",templateUrl:"res/tpl/routers/addUser.html",controllerUrl:"tpl/routers/addUserController",controller:"addUserController"}).state("userInfo",{url:"/userInfo/:accountId",templateUrl:"res/tpl/routers/userInfo.html",controllerUrl:"tpl/routers/userInfoController",controller:"userInfoController"}).state("ipcList",{url:"/ipcList",templateUrl:"res/tpl/routers/ipcList.html",controllerUrl:"tpl/routers/ipcListController",controller:"ipcListController"}).state("addIpc",{url:"/addIpc",templateUrl:"res/tpl/routers/addIpc.html",controllerUrl:"tpl/routers/addIpcController",controller:"addIpcController"}).state("ipcInfo",{url:"/ipcInfo/:cid",templateUrl:"res/tpl/routers/ipcInfo.html",controllerUrl:"tpl/routers/ipcInfoController",controller:"ipcInfoController"}).state("devTypeList",{url:"/devTypeList",templateUrl:"res/tpl/routers/devTypeList.html",controllerUrl:"tpl/routers/devTypeListController",controller:"devTypeListController"}).state("firmwareInfo",{url:"/firmwareInfo/:devTypeId",templateUrl:"res/tpl/routers/firmwareInfo.html",controllerUrl:"tpl/routers/firmwareInfoController",controller:"firmwareInfoController"}).state("IOSUpdate",{url:"/IOSUpdate",templateUrl:"res/tpl/routers/IOSUpdate.html",controllerUrl:"tpl/routers/IOSUpdateController",controller:"IOSUpdateController"}).state("AndroidUpdate",{url:"/AndroidUpdate",templateUrl:"res/tpl/routers/AndroidUpdate.html",controllerUrl:"tpl/routers/AndroidUpdateController",controller:"AndroidUpdateController"}).state("appInfo",{url:"/appInfo/:appId",templateUrl:"res/tpl/routers/appInfo.html",controllerUrl:"tpl/routers/appInfoController",controller:"appInfoController"})})});