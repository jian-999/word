$(document).ready(function(){
var slides=$("#animation>div figure");
var len=slides.length-1;
var O;
var L=len;
var C=0;
var R=1;
var pos=0;
var arrows=$("#arrows>button");
var points=$("#points>div");
var timer;

arrows.on({click:function(){
  clearInterval(timer);
   switch($(this).attr("data-direction")){
                           case "left":
 
                                     computedL();
                                     setLocalL();
                                     break;
                           case "right":
                                     computedR();
                                     setLocalR();     
   }
   ride();
}});

points.on({click:function(){
clearInterval(timer);
if($(this).index()!=pos){
  L=pos;
  C=pos=$(this).index();
}
setLocalL();

ride();
}});

function ride(){

  clearInterval(timer);
  timer=setInterval(ss,3000);

}
function ss(){
computedL();
setLocalL();

}




function  computedL(){
    O=L;

    L=pos++;
    if(pos>len){pos=0}
    C=pos;
    if(pos+1>len){R=0}else{R=pos+1}  

}

function  computedR(){
    O=R;

    R=pos--;
    if(pos<0){pos=len}
    C=pos;
    if(pos-1<0){L=len}else{L=pos-1}  

}

function setLocalL(){
    slides.removeAttr("class");
     points.removeAttr("class");
  if(window.matchMedia("(max-width:600px)").matches){

         slides.eq(L).addClass("CL");
         slides.eq(C).addClass("RC");
         points.eq(C).addClass("bg");
  }else{  
         
         slides.eq(O).addClass("L2O");
         slides.eq(L).addClass("C2L");
         slides.eq(C).addClass("R2C box");
         slides.eq(R).addClass("O2R");
  }
}

function setLocalR(){
    slides.removeAttr("class");
          
         slides.eq(O).addClass("R2O");
         slides.eq(R).addClass("C2R");
         slides.eq(C).addClass("L2C box");
         slides.eq(L).addClass("O2L");

}


function initial(){


setLocalL();
ride();
}
initial();

$(window).on({
  resize:function(){
     clearInterval(timer);
    setLocalL();
  }
})




});