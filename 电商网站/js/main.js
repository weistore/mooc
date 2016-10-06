window.onload=function(){
      var dls=getClassNames("shopClass_item",'dl');
      var text=getClassNames("shopClass_cont",'div');   
        for (var i = 0; i < dls.length; i++) {
        	dls[i].i=i;
  	        dls[i].onmouseover=function(){
  	            this.className="shopClass_item shopClass_active";
                text[this.i].className="shopClass_cont show"
  	        }
  	        dls[i].onmouseout=function(){
  	            this.className="shopClass_item";
  	            text[this.i].className="shopClass_cont hide"
  	        }
        }
              var oUl1= document.getElementById('banner1');
              var aLi1 = oUl1.getElementsByTagName('li');
              oUl1.style.width = aLi1[0].offsetWidth * aLi1.length + 'px';
              var oNum1 = document.getElementById('number1');
              var aLink1 = oNum1.getElementsByTagName('a');
              for (var i = 0; i < aLink1.length; i++) {
                  aLink1[i].index = i;
                  aLink1[i].onmouseover = function(){
                      for(var j=0;j<aLink1.length;j++){
                          aLink1[j].className = '';
                      }
                      oUl1.style.left = -aLi1[0].offsetWidth * this.index + 'px';
                      this.className = 'active';
                  }
              }
              var oUl2 = document.getElementById('banner2');
              var aLi2 = oUl2.getElementsByTagName('li');
              oUl2.style.width = aLi2[0].offsetWidth * aLi2.length + 'px';
              var oNum2 = document.getElementById('number2');
              var aLink2 = oNum2.getElementsByTagName('a');
              for (var i = 0; i < aLink2.length; i++) {
                  aLink2[i].index = i;
                  aLink2[i].onmouseover = function(){
                      for(var j=0;j<aLink2.length;j++){
                          aLink2[j].className = '';
                      }
                      oUl2.style.left = -aLi2[0].offsetWidth * this.index + 'px';
                      this.className = 'active';
                  }
              }
              var oUl3 = document.getElementById('banner3');
              var aLi3 = oUl3.getElementsByTagName('li');
              oUl3.style.width = aLi3[0].offsetWidth * aLi3.length + 'px';
              var oNum3 = document.getElementById('number3');
              var aLink3 = oNum3.getElementsByTagName('a');
              for (var i = 0; i < aLink3.length; i++) {
                  aLink3[i].index = i;
                  aLink3[i].onmouseover = function(){
                      for(var j=0;j<aLink3.length;j++){
                          aLink[j].className = '';
                      }
                      oUl3.style.left = -aLi3[0].offsetWidth * this.index + 'px';
                      this.className = 'active';
                  }
              }
}



function getClassNames(classStr,tagName){
  if (document.getElementsByClassName) {
    return document.getElementsByClassName(classStr)
  }else {
    var nodes = document.getElementsByTagName(tagName),ret = [];
    for(i = 0; i < nodes.length; i++) {
      if(hasClass(nodes[i],classStr)){
        ret.push(nodes[i])
       }
    }
    return ret;
  }
}
function hasClass(tagStr,classStr){
  var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含
  for (var i=0;i<arr.length;i++){
    if (arr[i]==classStr){
      return true ;
    }
  }
  return false ;
} 