// var  chuli=function(test){
//       return selector '.'+test;
// }
// var jQuery=function(selector){
// 	selector=chuli(selector);
// 	return document.querySelector(selector);
// 	var $ =function(selector){
//        return new jQuery(selector)
// 	}
// 	window.$=$;
// }



(function(){//使用闭包不会影响其他变量
	var jQuery=function(el){
		var els=document.querySelectorAll(el);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}
		this.length=els.length;
	}
	jQuery.prototype.addClass=function(cla){
		for(var i=0;i<this.length;i++){
			this[i].classList.add(cla);
		}
	}
	var $=function(el){
		return new jQuery(el)//上面的this指向这个函数$
	}
	window._J=$;//让_J变成全巨变量

})();


