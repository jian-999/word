$(document).ready(function(){
var title1=$("#nav1>div>h3");
var title2=$(".ph-nav h3");
var pre1="";
var pre2="";

title1.on({click:function(){
  if(pre1){
  	      pre1.slideUp();
  }
  pre1=$(this).next().next();
  pre1.slideDown();
 if(pre2){
  	      pre2.slideUp();
  }

}});

title2.on({click:function(){
  if(pre2){
  	      pre2.slideUp();
  }
  pre2=$(this).next();
  pre2.slideDown();

}});




});