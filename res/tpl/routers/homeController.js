define(["app","loadCss","myService","dashBoard"],function(app,loadCss){function panelRender(scope){$("#myDashboard").dashboard({draggable:!0,height:"300px",sensitive:!1,resizable:!0,resizeMessage:!0,data:[{id:"panel1",colWidth:"4"},{id:"panel2",colWidth:"3"},{id:"panel3",colWidth:"2",content:"asd"}],afterPanelRemoved:function(id){console.log("面板移除"+id)},panelRemovingTip:"确认移除？",afterOrdered:function(newOrders){console.log(newOrders)},onResize:function(e){console.log(e)},afterRefresh:function(){console.log("远程加载完成")}}),console.log(2)}loadCss.loadCss("res/lib/zui/css/zui.min.css"),loadCss.loadCss("res/lib/zui/dashboard/zui.dashboard.min.css"),loadCss.loadCss("res/css/home.css"),app.controller("homeController",function($scope,myService,$state,$timeout,data){console.log(data),$scope.currentlayOut=[{id:"userList",title:"用户列表",order:"1",colWidth:"8",height:"300px",sref:"userList",content:"userList"},{id:"userInfo",title:"用户信息",order:"2",colWidth:"2",height:"400px",sref:"userInfo",content:"userInfo"},{id:"productList",title:"产品列表",order:"3",colWidth:"4",height:"500px",sref:"ipcList",content:"productList"}],$scope.newModule={colWidth:"",title:"",id:"",colWidth:"",height:300,sref:""},$scope.showModel=!1,$scope.addPanel=function(){$scope.showModel=!0},$scope.ensure=function(){console.log($scope.newModule),$scope.currentlayOut.push($scope.newModule),$scope.showModel=!1,$scope.newModule={colWidth:"",title:"",id:"",colWidth:"",height:300,sref:""},$state.reload("home")},$scope.exit=function(){$scope.showModel=!1,$scope.newModule={colWidth:"",title:"",id:"",colWidth:"",height:300,sref:""}}}),app.directive("repeatFinish",function(){return{link:function(scope,element,attr){1==scope.$last&&panelRender(scope)}}}),panelRender()});