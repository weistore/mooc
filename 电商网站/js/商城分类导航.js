 window.onload=function(){
        var dls=document.getElementsByTagName('shopitem');
        var text=document.getElementsByTagName('shoplist-cont');   
        for (var i = 0; i < text.length; i++) {
            if(i>0){
            text[i].setAttribute('class','hide')
            }
        }
        for (var i = 0; i < dls.length; i++) {
  	        dls[i].onmouseover=function(){
  		        over(this);
  	        }
  	        dls[i].onmouseout=function(){
  		        over(this);
        	} 
    }
}
    function over(obj){
        var dls=document.getElementsByTagName('shopitem');
        var text=document.getElementsByTagName('shoplist-cont');   
        for (var i = 0; i < dls.length; i++) {
            if (dls[i]==obj) {
                dls[i].setAttribute('class','shopitemactive');
                text[i].setAttribute('class','shoplist-cont show');
            } else{
                dls[i].setAttribute('class','shopitem');
                text[i].setAttribute('class','hide')
            };
        };
    }