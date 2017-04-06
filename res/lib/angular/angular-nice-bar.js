!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){module.exports=require("./src/js/main")},{"./src/js/main":9}],2:[function(require,module,exports){"use strict";var event=require("../util/event"),dom=require("../util/dom");module.exports=function(i){function getNewTop(offsetY){return offsetY<i.sliderY.height/2?0:offsetY>i.railY.height-i.sliderY.height/2?i.railY.height-i.sliderY.height:offsetY-i.sliderY.height/2}function updateContent(newTop,originTop){var journey=newTop-originTop,scrollTop=journey/i.ratioY;i.content.element.scrollTop+=scrollTop,i.sumDeltaY=i.content.element.scrollTop}function updateSlider(newTop){dom.css(i.sliderY.element,"top",newTop),i.sliderY.deltaY=0,i.sliderY.top=newTop}function clickRailYHandler(e){var originTop=dom.css(i.sliderY.element,"top"),newTop=getNewTop(e.offsetY);updateSlider(newTop),updateContent(newTop,originTop),e.preventDefault()}event.bind(i.railY.element,"click",clickRailYHandler)}},{"../util/dom":10,"../util/event":11}],3:[function(require,module,exports){"use strict";var event=require("../util/event"),dom=require("../util/dom");module.exports=function(i){function mouseMoveHandler(e){i.showSliderY(),i.sliderY.deltaY=0;var newTop=e.pageY-originPageY+originTop;newTop<=0?newTop=0:newTop>=differenceHeight&&(newTop=differenceHeight),i.sliderY.top=newTop,dom.css(i.sliderY.element,"top",newTop);var journey=newTop-originTop,newScrollTop=journey/ratioY;newScrollTop+=originScrollTop,i.content.element.scrollTop=newScrollTop,i.sumDeltaY=i.content.element.scrollTop,e.stopPropagation(),e.preventDefault()}function mouseUpHandler(){event.unbind(document,"mousemove",mouseMoveHandler),i.hideSliderY()}var originPageY,originTop,originScrollTop,differenceHeight=i.railY.height-i.sliderY.height,ratioY=i.ratioY;event.bind(i.sliderY.element,"mousedown",function(e){originPageY=e.pageY,originTop=dom.css(i.sliderY.element,"top"),originScrollTop=i.content.element.scrollTop,event.bind(document,"mousemove",mouseMoveHandler),event.once(document,"mouseup",mouseUpHandler)})}},{"../util/dom":10,"../util/event":11}],4:[function(require,module,exports){"use strict";var event=require("../util/event");module.exports=function(i){event.bind(i.container.element,"mouseenter",function(e){i.showSliderY()}),event.bind(i.container.element,"mouseleave",function(e){i.hideSliderY()})}},{"../util/event":11}],5:[function(require,module,exports){"use strict";var event=require("../util/event"),dom=require("../util/dom");module.exports=function(i){function mouseWheelHandler(e){i.sumDeltaY+=e.deltaY;var newTop=0;i.sumDeltaY*i.ratioY<0?(newTop=0,i.sliderY.deltaY=0,i.sumDeltaY=0):i.sumDeltaY*i.ratioY>i.railY.height-i.sliderY.height?(newTop=i.railY.height-i.sliderY.height,i.sumDeltaY=i.content.element.scrollHeight-i.content.element.clientHeight):newTop=i.sumDeltaY*i.ratioY,dom.css(i.sliderY.element,"top",newTop);var newScrollTop=0;newScrollTop+=i.sumDeltaY,i.content.element.scrollTop=newScrollTop,e.preventDefault(),e.stopPropagation()}event.bind(i.content.element,"wheel",mouseWheelHandler)}},{"../util/dom":10,"../util/event":11}],6:[function(require,module,exports){"use strict";module.exports=function(i){}},{}],7:[function(require,module,exports){"use strict";var instance=require("./instance"),clickRail=require("./event/click-rail"),dragSlider=require("./event/drag-slider"),mouseWheel=require("./event/mouse-wheel"),pressKeyboard=require("./event/press-keyboard"),hoverContainer=require("./event/hover-container");module.exports=function(element,options){var i=Object.create(instance);i.init(element,options),i.content.element.scrollHeight>element.clientHeight&&(clickRail(i),dragSlider(i),mouseWheel(i),pressKeyboard(i),hoverContainer(i))}},{"./event/click-rail":2,"./event/drag-slider":3,"./event/hover-container":4,"./event/mouse-wheel":5,"./event/press-keyboard":6,"./instance":8}],8:[function(require,module,exports){"use strict";function setTheme(element,optopns){dom.addClass(element,"theme-"+optopns.theme),dom.addClass(element,"nice-bar")}function createSliderYElement(){return dom.createElement('<div class="nice-bar-slider-y"></div>')}function createRailYElement(){return dom.createElement('<div class="nice-bar-rail-y"></div>')}function createContentElement(element){var inner=element.innerHTML,id=guid();element.innerHTML='<div id="'+id+'"></div>';var $content=document.getElementById(id);return $content.innerHTML=inner,$content}var dom=require("./util/dom"),guid=require("./util/guid"),instance={init:function(element,options){options=options?{theme:options.theme||"light"}:{theme:"light"};var $content=createContentElement(element),$railY=createRailYElement(),$sliderY=createSliderYElement();setTheme(element,options),dom.appendTo($railY,element),dom.appendTo($sliderY,element),this.sumDeltaY=0,this.container={element:element,width:element.clientWidth,height:element.clientHeight},this.ing=!0,this.content={deltaY:0,element:$content,width:$content.clientWidth,height:$content.scrollHeight,scrollTop:$content.scrollTop},this.ratioX=this.container.width/this.content.width,this.ratioY=this.container.height/this.content.height,this.railX={width:400,height:""},this.railY={element:$railY,width:400,height:this.container.height},this.sliderX={width:400,height:""},this.sliderY={deltaY:0,element:$sliderY,top:0,width:40,height:this.container.height*this.ratioY},dom.css(this.sliderY.element,"height",this.sliderY.height+"px"),dom.css(this.container.element,{overflow:"hidden",position:"relative"}),dom.css(this.content.element,{overflow:"hidden",height:this.container.height})},showSliderY:function(){dom.addClass(this.sliderY.element,"fade-in"),dom.removeClass(this.sliderY.element,"fade-out")},hideSliderY:function(){dom.addClass(this.sliderY.element,"fade-out"),dom.removeClass(this.sliderY.element,"fade-in")}};module.exports=instance},{"./util/dom":10,"./util/guid":12}],9:[function(require,module,exports){"use strict";var init=require("./init");module.exports={init:init}},{"./init":7}],10:[function(require,module,exports){"use strict";function getCss(element,styleName){var styleValue=window.getComputedStyle(element)[styleName];return(parseInt(styleValue,10)||0===parseInt(styleValue,10))&&(styleValue=parseInt(styleValue,10)),styleValue}function setSingleCss(element,styleName,styleValue){return"number"==typeof styleValue&&(styleValue=styleValue.toString()+"px"),element.style[styleName]=styleValue,element}function setMultiCss(element,obj){for(var key in obj){var styleValue=obj[key];"number"==typeof styleValue&&(styleValue=styleValue.toString()+"px"),element.style[key]=styleValue}return element}var dom={createElement:function(string){var element=document.createElement("div");return element.innerHTML=string,element.firstElementChild},appendTo:function(child,parent){parent.appendChild(child)},addClass:function(element,className){var classes=element.className.split(" ");return classes.indexOf(className)<0&&classes.push(className),element.className=classes.join(" "),element},removeClass:function(element,className){var classes=element.className.split(" "),index=classes.indexOf(className);return index>-1&&classes.splice(index,1),element.className=classes.join(" "),element},css:function(element,styleNameOrObject,styleValue){return"object"==typeof styleNameOrObject?setMultiCss(element,styleNameOrObject):void 0===styleValue?getCss(element,styleNameOrObject):setSingleCss(element,styleNameOrObject,styleValue)}};module.exports=dom},{}],11:[function(require,module,exports){"use strict";var event={bind:function(element,name,listener){element.addEventListener(name,listener,!1)},unbind:function(element,name,listener){element.removeEventListener(name,listener,!1)},once:function(element,name,listener){var that=this,once=function(e){that.unbind(element,name,once),listener(e)};that.bind(element,name,once)}};module.exports=event},{}],12:[function(require,module,exports){"use strict";function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}module.exports=function(){return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}},{}],13:[function(require,module,exports){"use strict";function niceBarDirective(){return{restrict:"AE",scope:!0,link:function(scope,element,attr){var delay=0;if(attr.niceBarDelay&&(delay=parseInt(attr.niceBarDelay,10),delay.toString()===NaN.toString()))throw new Error("nice-bar-delay shoule be a number");attr.niceBarTheme&&(delay=attr.niceBarTheme),setTimeout(function(){nb.init(element[0],{theme:"light"})},delay)}}}function niceBarService(){return{init:function(element,options){options=options?{theme:options.theme||"light"}:{theme:"light"},console.log(options),nb.init(element,{theme:"dark"})}}}var nb=require("nice-bar");module.exports=angular.module("ngNiceBar",[]).directive("niceBar",niceBarDirective).factory("niceBar",niceBarService)},{"nice-bar":1}]},{},[13]);