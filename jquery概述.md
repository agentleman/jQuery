# jQuery
前端开发在开始写代码之前，一般首先要解决的两个问题
 1 解决js标准本身的兼容性问题 es5shim.js
 2 解决DOM扩展部分的兼容性问题 jQuery
 ```html
 第一个引入的js库用来解决兼容性问题
<script src="jquery.js"></script>
<script src="header.js"></script>
<script src="footer.js"></script>

 ```
 分开引用的js文件一定要解决的一个问题 不能污染全局作用域
 ```javascript
var getElement=function(selector){
	if(document.querySelector){
	return document.querySelector(selector);
}else{
	console.warnning("浏览器不支持")
	console.error("请更换浏览器")
}
}

 ```
 ```javascript
 var el=getElement('.abc')
 var getElement=function(){}
 ```
上面这种写法的两个问题
 1 用户需要学习一门全新的语法
 2 用户需要避开那个库中的所有全局变量

## 实现原理
DOM对象
```javascript
var el={
	offsetWidth:12,
	_proto_:(HTMLDivElement)
	 title:"ab",
	  _proto_:HTMLElement
	   src:"nn.png",
	    _proto_:Element
	     getAttribute:"tr",
	     _proto_:node
	      nodeName:"ff"
} 
```
DOM集合
var els={
	0:div;
	1:div;
	length:2

}
jQuery对象
var jQuery={
    0:div,
    1:div,
    legth:2,
	_proto_:
	 addClass:fn,
	 removeClass:fn,
	 toggleClass:fn,
	 css:fn,
	 prop:fn
     ...
}
jQuery是一个javascript库
库可以简单理解为一堆以某种方式组织起来的，方便，易用的函数集合；

jQuery库的优点
1 全面解决pc端的兼容性问题
2 语法精炼 性能好 插件库非常庞大

jQuery版本号之间的区别
1.xx->1.12 支持ie6-ie8
2.0        彻底放弃ie<10的支持，转向移动端

## jQuery 原理

$().addClass("red")
1 new 的时候究竟发生了什么
    每一个函数身上，都有一个其他对象不具备的属性 叫做 'prototype'
     1 构建一个空对象 {}
     2 mao.call({}) 把mao那个函数作为这个空对象的临时方法调用了一次
     3 把mao那个函数对象身上的prototype那个属性拿来，作为自己原型链中的一条
     4 返回最终对象
2 对象的原型链
3 函数对象身上一个属性（prototype）和一个方法（call）
4 this的指向

```javascript
//原型链实例
(function(){
	var jQ=function(el){
		var els=document.querySelectorAll(el);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}
		this.length=els.length
	}

	jQ.prototype.addClass=function(e){
		for(var i=0;i<this.length;i++){
			this[i].classList.add(e);
		}
	}

	jQ.prototype.removeClass=function(e){
		for(var i=0;i<this.length;i++){
			this[i].classList.remove(e);
		}
	}

    var $=function(el){
    	return new jQ(el)
    }
	window.$=$;
})();
```
$函数能接受的参数类型以及对应的返回值
 null  jQuery对象
 数组，对象 处理过的jQuery对象
 选择器
 html标签
 dom对象
 dom集合
 函数

 jquery 的大多数方法都会返回一个jQuery集合；

 操作集合的方法返回的就是原集合
 对集合做过滤或者导致集合改变的一些方法返回后的jQuery集合
 $  .append  这一类方法，当涉及到创建DOM对象时，她们会返回创建完成后的一个jQuery集合

 所以在jQuery中链式调用很常见

 jQuery中能使用的选择器
   jQuery中选择器使用一个叫sizzle.js的库
  .a p > a .item
   从后往前找(在树中找父元素只是一次查找，找子元素需要遍历)
 * parent>child 子选择器    父元素下的直接子元素
 * A B   后代选择器
 * prev + next 相邻一个 选择器
 * prev ~ next 相邻所有 选择器//选择与prev平级的兄弟元素

 在找到的集合中筛选
 $('.header div:first')

 * :animated   所有正在执行jquery动画的元素
 * :eq()       下标等于几的元素 从0开始
 * :lt()       下标小于几的元素
 * :gt()       下标大于几的元素
 * :even       偶数元素
 * :odd        奇数元素
 * :header     $(this).find('*:header')//h1~h6标签
 * :lang()     $(this).find('div:')//找出属性中有lang属性的元素
 * :root       html元素 
 * :target     index.html#A
 * :not        接受简单选择器，从选中的元素中剔除符合规则的元素


 * :contains    过滤内容中包含某个字符的元素
 * :empty       #('p:empty')没有内容的元素
 * :has()       括号中可以接受一个简单选择器
                判断已选中的元素的子元素中是否包含某个规则的元素
 * :parent      选中有子元素的元素 
 * :visible     留下选中元素中可见的元素
 * :hidden      留下选中元素中不可见的元素
     attr为属性名
 * :[attr]      筛选出有attr这个属性的
 * :[attr=aa]   选出有attr这个属性且值为aa的元素
 * :[attr!=aa]   选出attr属性的不等于aa的元素
 * :[attr|=aa]   属性以aa开头或以aa-开头的元素
 * :[attr*=aa]   baac  选出属性中包含aa的元素
 * :[attr^=aa]   aabbd  aa-dd   aa-a1 以aa开头的属性的元素
 * :[attr~=aa]   空格隔开的有aa的就能选到
 * :[attr$=aa]   以aa结尾的属性的元素

 * li:nth-child(5)      找li的父元素里面的第5个子元素
 * li:nth-last-child(5) 倒着数找li的父元素里的第5个子元素

 * li:nth-of-type(5)    判断依据：选中的元素是不是父元素下的同类元素的第5个
 
      //   $('.selectize-input input').bind('keydown',function(e){
      //    if(e.keyCode!==13){
      //     return;
      //   }
      //   var v=$(this).val();
      //   $('.main-content a:contains('+v+')').css('color','red');
      //   $(this).val('');
      //   console.log(v);
      // })
jQuery中的方法分两类：
  1.直接出现在jQuery函数对象身上，是一些基础性质的工具函数
  2.出现在jQuery.fn函数对象的原型链上，用来批量或单个操作jQuery集合中的dom元素
  大部分方法重载很严重
  ```javascript
  $('li').css('width')//取出选中集合中第一个元素的宽度+单位
  $('li').css('width'，200)//设置选中的所有元素的宽度为200px;
  $('li').css({width:200,height:200,border:1px solid black})
   //给选中所有的元素加上传入对象中的所有css样式
  $('li').css('width',function(){
  return  Math.random();
  })//给集合中的每一个元素添加'width'这个属性
  每一个元素的'width'的值由第二个参数传入的函数计算，就是jQuery会对集合中的每一个元素调用 用户传入的回调函数，调用的时候会传入两个参数，一个是当前元素在集合中位置(下标)，一个是当前元素现在的width值

  $('li').css({
  width:function(){ return Math.random();}，
  height:function(){ return Math.random();}，
  backgroundColor:function(i){return color(i)}
  })
  ```
  jQuery库的设计理念
  1.解决兼容性问题
  2.让从页面中查找元素更轻松
  3.提供很多内置方法，使对dom集合的操作变的更轻松
  css  
  addClass  这些方法用过内置的遍历去操作每一个DOM元素，jQuery不希望我们在循环中使用这些内置方法
  遍历的两种情况
  1.给每一个DOM元素设计同样的行为或属性
  2.给每一个DOM元素设计不同的行为或属性
 ```javascrinpt
 $('.item').addClass('aa')等价于以下循环
 var els=document.querySelectorAll('.item');
    for(var i=0;i<els.length;i++){
    $('els[i]').classList.add('aa')
    }
 ``` 
 attr的用法
 1. $('li').attr('data-id');
 2. $('li').attr('data-id','12');
 3. $('li').attr('data-id',function(){
 return  Math.random();
 });
 4. $('li').attr({'data-id',data-stc:'img.png'});
 5. $('li').attr({
       data-id:function(){return Math.random();},
       data-stc:'img-png'
 })

 6. 以空格分开的字符串  addClass('a c data')添加多个类名
   以下方法的一些参数
   dom对象  dom集合  html规则的字符串 jQuery对象  也可以由函数来生成
   返回值：谁调用返回谁
 .append() 添加到最后一个子元素之后
 .prepend()添加到第一个元素之前
把jquery对象作为子元素添加到某个元素中去
  参数：dom dom集合 选择器
 .appendTo()
 .prependTo()


trrigerHandler  只处理注册函数，不会冒泡，不会模仿浏览器冒泡行为
trigger
mouseout 和mouseove  会冒泡 
mouseenter  mouseleave  不会冒泡
focus blur  会冒泡  ；focusin  focusout不会冒泡

由于mouseout 和mouseove 的冒泡，一般使用hover来操作，hover是对mouseenter和mouseleave的封装 
$('.aaa').hover(function(){mouceenter函数},function(){mouseleave函数})

$('aaa').toggle(fn1,fn2,fn3)
on添加事件的重载
1. $('.item').on('click',function(){
  
})

2. var clickHandler=function(){consol.log(1)}
$('.item').on('click mouseleave mouseenter',clickHandler);//同时添加几个事件给一个对象，多个事件处理函数一样

3. $('.item').on({'click':fn1,'mouseleave':fn2,'mouseenter':fn3})//同时添加几个事件给一个对象，多个事件处理函数不一样
4.事件委托的方式
只能使用on  和 delegate
//用on来添加
 $('#ul').on('click','li',function(){
  
})
//事件委托的另一种方式(不常用)
$('#ul').delegate('click','li',function(){
  
})
5.triggle()会模拟浏览器触发事件(会冒泡)  triggerHandler不会
6.所有事件添加函数的返回值都是要绑定事件的那个jquery对象所以可以继续链式调用$('.item').click(function(){console.log(1)}).css();
7. ready事件一般用$(function(){})来代替
   内部的处理方式是document.addeventlistener('DOMContentLoaded');
   如果文档结构(不包含图片，脚本等)已经加载完成，直接运行函数
   如果没有加载完成，把函数绑定到DOMContentLoaded事件
jQuery中的事件对象

继承自原生的事件对象  e.keyCode e.altkey e.target e.clientX
* e.data的应用场景
var  xs=function(){
  var bb={a:1,b:2}
  $('li').on('click',bb,function(e){//在点击事件中我们想给某个对象bb做一些操作，因为这个对象可能会受其他程序影响而发生变化，因而我们把要操作的那个确定的对象放到点击事件(存储在data那个属性里)里，我们通过e.data来获取最开始存储的bb这个对象，它不会受到其他程序的影响，直接获取到bb={a:1,b:2};
  可以用e.data.a获得a的值1
  console.log(bb);
})
}

$('li').on('click',{x:1,y:3},function(e){
  console.log(e.data);
})
$('li').click(x:1,y:3},function(e){
  console.log(e.data);
})

* e.namespace
$('li').on({
  'click':function(){console.log(1);},
  'click.lunbo':function(e){console.log(2,e.namespace)}
})
 $('li').triggle('click.lunbo')

 stop阻止动画原理  stop有两个参数true   如stop(true,true)
 //没有参数，停止当前动画，执行后序队列动画
 //只有第一个true，是否清除队列    清除后序队列 只执行当前动画 
 //第二个true，  是否到当前动画最终状态  当前动画到最终状态并且清除后序队列
 finish     终止动画队列中的所有动画，直接到达最后一个动画的最终状态
 dequeue  用dequeue来结束队列中自定义的函数，队列还能继续执行
 clearQueue 清空对象上尚未执行的所有队列如果不带参数，则默认清空的是动画队列。这跟 stop(  
     true) 类似，但 stop(true)只能清空动画队列，而这个可以清空所有通过 .queue() 创建的队列。

javascript异步编程需要注意的问题
1.理清代码执行的时间线
###  同步
正常的函数
正常的赋值
正常的逻辑运算 普通运算

### 异步
  事件   
  动画(setInterval setTimeout)   
  Ajax网络请求
******jQuery.type 的用法****
 jQuery.contains(x,y)判断x是否包含y

 ###音频
 <audio src="1001.mp3 controls autoplay></audio>