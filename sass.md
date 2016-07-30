//变量
$var1 : 12px;
$var2 : $var/2;
$var3 :'top-right';
$var4 : #aaa,#bbb;
$var5 : ('news':#111,'blog':#222);
nth index map_keys map_get

选择器和属性使用变量  要插值  #{$bg}
属性的值可以直接使用变量
//嵌套
%aa{
	width:;
	height:;
}
.bb{
	@extend %x;
	background:red;
}
普通的类名也可以被extend   写法@extend .one
@mixin  aa{
	width:;
	height:;
}
.bb{
	@include;
}

@each $name in map-keys {
 $color:map-get($liebiao,$name);
  .label.label-#($name){
  border:1px solid $color;
  background:$color;
  &:hover{
    background:$bg;
    color:$color;
  }
  }
}
var max=-Infinity  for(var i in obj){  遍历找最大值}
transform:scale(缩放)  rotate(旋转)  translate(平移)

@each $colors in map-keys{
  $color:map-get($liebiao,$name);
  .lable.lable-#($name){
  border:1px solid $color;
  &:hover{
     background:$bg;
     color:$coor;
  }
  }
