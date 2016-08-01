$(function(){
   $.fn.y=function(shuzhi){
   	$(this).css({
   		transform:'translate3d('+ shuzhi+'px,0,0)'
   		})
   	return this;
   }
   $.fn.t=function(time){
   	  var t=time/1000;
   	 $(this).css({
         transition:'transform '+ t +'s  ease'
   	 	})
   return this;
   }
   $.fn.clear=function(time){
   	  var t=time/1000;
      $(this).delay(t)
      .queue(function(){
      	 $(this).css({
        ransform:'none'
      	})
      }).dequeue();
      return this;
   }
  $('.box').on('click',function(){$(this).y(200).t(500).clear(500)})
})