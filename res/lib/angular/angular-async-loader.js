!function(){function factory(angular,undefined){function resolveDependencies(dependencies){return"string"==typeof dependencies&&(dependencies=[dependencies]),["$q",function($q){var defer=$q.defer();return amdRequire(dependencies,function(){defer.resolve(arguments)}),defer.promise}]}function route(config){function collectDependencies(config,dependencies){config.controllerUrl&&dependencies.push(config.controllerUrl),config.dependencies&&("string"==typeof config.dependencies?dependencies.push(config.dependencies):[].push.apply(dependencies,config.dependencies))}var dependencies=[];if(collectDependencies(config,dependencies),config.hasOwnProperty("views")&&Object.keys(config.views).forEach(function(view){collectDependencies(config.views[view],dependencies)}),dependencies.length>0){var resolve=config.resolve||{};resolve.$dummy=resolveDependencies(dependencies),config.resolve=resolve}return config}var amdRequire=function(){if("function"==typeof require)return"function"==typeof require.async?require.async:require;if("object"==typeof seajs&&"function"==typeof seajs.use)return seajs.use;if("object"==typeof System&&"function"==typeof System.amdRequire)return System.amdRequire;throw new Error("No amd/cmd module loader found.")}();return{VERSION:"1.3.2",configure:function(app){app.provider("ngProviders",["$controllerProvider","$compileProvider","$filterProvider","$provide","$injector",function($controllerProvider,$compileProvider,$filterProvider,$provide,$injector){this.$get=function(){return{$controllerProvider:$controllerProvider,$compileProvider:$compileProvider,$filterProvider:$filterProvider,$provide:$provide,$injector:$injector}}}]),app.run(["ngProviders","$injector",function(ngProviders,$injector){var $controllerProvider=ngProviders.$controllerProvider,$compileProvider=ngProviders.$compileProvider,$filterProvider=ngProviders.$filterProvider,$provide=ngProviders.$provide;app.useModule=function(name){var module=angular.module(name);if(module.requires)for(var i=0;i<module.requires.length;i++)app.useModule(module.requires[i]);return angular.forEach(module._invokeQueue,function(args){var provider=ngProviders[args[0]]||$injector.get(args[0]);provider[args[1]].apply(provider,args[2])}),angular.forEach(module._configBlocks,function(args){var provider=ngProviders.$injector.get(args[0]);provider[args[1]].apply(provider,args[2])}),angular.forEach(module._runBlocks,function(args){$injector.invoke(args)}),app},app.value=function(name,value){return $provide.value(name,value),app},app.constant=function(name,value){return $provide.constant(name,value),app},app.factory=function(name,factory){return $provide.factory(name,factory),app},app.service=function(name,service){return $provide.service(name,service),app},app.filter=function(name,filter){return $filterProvider.register(name,filter),app},app.directive=function(name,directive){return $compileProvider.directive(name,directive),app},app.controller=function(name,controller){return $controllerProvider.register(name,controller),app},app.decorator=function(name,decorator){return $provide.decorator(name,decorator),app},app.provider=function(name,service){return $provide.provider(name,service),app},app.get=function(name){return $injector.get(name)}}]),app.requires&&-1!==app.requires.indexOf("ngRoute")&&app.config(["$routeProvider",function($routeProvider){var whenFn=$routeProvider.when;$routeProvider.when=function(path,config){return whenFn.call($routeProvider,path,route(config))}}]),app.requires&&-1!==app.requires.indexOf("ui.router")&&app.config(["$stateProvider",function($stateProvider){var stateFn=$stateProvider.state;$stateProvider.state=function(state,config){return stateFn.call($stateProvider,state,route(config))}}])}}}"function"==typeof define&&define.amd?define(["angular"],function(angular){return factory(angular)}):window.asyncLoader=factory(window.angular)}();