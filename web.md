## 什么是动态网站？什么是静态网站？
192.168.3.2/这是一台机器
192.168.3.2/1.jpg 可以用“/”链式访问子文件  一般在页面给一个链接

##一些常见问题处理
要打开的三个页面
* localhost/phpmyadmin
* localhost/index.php
* localhost/admin.php

在任何页面都可以使用
* index.html
* header.html
* footer.html
* 栏目划分的一般方法
首页一般不作为栏目(直接写咋html页面中)
新闻动态(尽量使用新闻模型，让子所有栏目使用同一模型)
   ——校内新闻(新闻模型)
   ——国际新闻(新闻模型)
   ——新闻发布规则(单网页)
   —— bbc       (外链)


   招聘信息(在首页中是动态的，但是没出现在导航中)
   使用招聘模型把招聘信息作为一个栏目
   (！！！设置该栏目不在导航显示)
   catid = 89;
   {pc:content action='lists' catid=89}{/pc}
   去获取这个隐藏栏目下的内容

   公司介绍或者是关于我们(其下都是单页)
   新建 关于我们 (单页)-> page_a.html
      *公司简介 ->    page_a.html
      *董事长简介->   page_b.html

一些常见的问题处理

要打开的三个页面

localhost/phpmyadmin 用来查看数据库
localhost/index.php
localhost/admin.php
在任何页面都可以使用 {pc}{/pc}

index.html $catid = 0;
header.html $catid = ?; {template “content”,x}
footer.html $catid = ?; {template “content”,x}
cebianlan.html $catid = ?; {template “content”,x}
在这些页面取栏目

{pc:content action=”category” catid=0}{/pc}
{pc:content action=”category” catid=12}{/pc} (12这个栏目可以后台操作不显示在导航)
在这些页面取栏目下的内容

{pc:content action=”lists” catid = 5}{/pc}

category_*.html $catid = 使用了这个模型的栏目的id
(如果一个栏目有子栏目，点击栏目链接会来到category)
list_*.html $catid = 使用了这个模型的栏目的id
(如果一个栏目下面再没有子栏目，点击链接会来到list)
show_*.html $catid = 使用了这个模型的栏目的id
(每个栏目下用action=”lists”读出来的内容的链接,都是指向对应栏目的show_*.html)
page_*.html $catid = 使用了这个单页的栏目的id
(所有单网页的链接都是指向各自的page_*.html)
查找v9_category那张表中parendid 为 x 的栏目

{pc:content action=”category” catid=x}{/pc}
查找v9_模型那里那张数据表 中 catid 为 x 的条目

{pc:content action=”lists” catid=x}{/pc}

栏目划分的一般方法

首页 一般不作为栏目添加(直接写在html页面中)

新闻动态 (尽量使用新闻模型,让下面的子栏目使用同一模型)

校内新闻 (新闻模型)

国际新闻 (新闻模型)

国内新闻 (新闻模型)

新闻发布规则 (单网页)

bbc (外链)

招聘信息(在首页中是动态的，但是没出现在导航中)

使用招聘模型把招聘信息作为一个栏目

(!!!!设置该栏目不在导航显示)

catid = 89;

{pc:content action=’lists’ catid=89}{/pc} 去获取这个隐藏栏目下的内容

关于我们（其下都是单页）

新建关于我们 (单页) -> page_a.html

公司简介 -> page_a.html

董事长简介 -> page_b.html