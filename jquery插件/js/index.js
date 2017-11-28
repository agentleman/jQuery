$(function(){
//   // var titles=$('#shang .title li');
//   console.log(titles)
//   var contents=$('#shang .content li');
//   var titles1=$('#xia .title li');
//   var contents1=$('#xia .content li');
//   titles.on('click',function(){
//    console.log(5);
//    titles.removeClass('active');
//    $(this).addClass('active');
//    contents
//    .removeClass('active')
//    .eq($(this).index()).addClass('active')
// })
//  titles1.on('click',function(){
//    console.log(5);
//    titles1.removeClass('active');
//    $(this).addClass('active');
//    contents
//    .removeClass('active')
//    .eq($(this).index()).addClass('active')
// })

$.fn.xuanxiangka=function(op){
   var option={
      title:'.title li',
      content:'.content li',
      active:'active',
      callback:$.noop
   };
   $.extend(option,op);
   var titles=$(this).find(option.title);
   var contents=$(this).find(option.content);
   titles.on('click',function(){
      var c=option.active;
      var callback=option.callback;
      titles.removeClass(c);
      $(this).addClass(c);
      contents.removeClass(c);
      contents.eq($(this).index()).addClass(c);
      callback();
   })

}
$('#shang').xuanxiangka({callback:function(){
   alert($(this).index())
}});
$('#xia').xuanxiangka();

})