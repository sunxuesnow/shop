(function () {
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImgs = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var oSingle = document.getElementById("single");
    var oWrapper = oSingle.getElementsByClassName("wrapper")[0];
    var nowIndex = 0;
    for(var i=0; i<aSmallImgs.length; i++){
        aSmallImgs[i].index = i;
        aSmallImgs[i].onclick = function () {
            nowIndex = this.index;
            changeImg();
        };
    }

    oLeft.onclick = oRight.onclick = function () {
      if(this === oRight){
          nowIndex++;
          if(nowIndex == aSmallImgs.length){
              nowIndex = 0;
          }
      }else{
          nowIndex--;
          if(nowIndex == -1){
              nowIndex = aSmallImgs.length - 1;
          }
      }
        changeImg();
    };
    function changeImg(){
        oBigImg.src = aSmallImgs[nowIndex].src;
        oMagnifyImg.src = aSmallImgs[nowIndex].src;
        for(var i=0; i<aSmallImgs.length; i++){
            aSmallImgs[i].className = "";
        }
        aSmallImgs[nowIndex].className = "selected";

        //小图片移动
        var left = 0;
        if(nowIndex == 0){
            oSmallPic.style.left = 0;
            left = 0;
        }else{
            left = 1;
            //oSmallPic.style.left = -(aSmallImgs[0].offsetWidth + 10) + "px";
        }
        animate(oSmallPic,{
            left: -(aSmallImgs[0].offsetWidth + 10)*left
        });
    }
    //放大镜
    var oDrag = document.getElementById("drag");
    var oMagnify = document.getElementById("magnify");
    var oMask = document.getElementById("mask");
    var oMagnifyImg = oMagnify.getElementsByTagName("img")[0];
    oMask.onmouseover = function () {
        oDrag.style.display = "block";
        oMagnify.style.display = "block";
    };
    oMask.onmouseout = function () {
        oDrag.style.display = "none";
        oMagnify.style.display = "none";
    };
    oMask.onmousemove = function (e) {
        e = e|| window.event;
        //判断drag边界范围
        var left = e.pageX - oWrapper.offsetLeft - oDrag.offsetWidth/2;
        var top = e.pageY - oSingle.offsetTop - oDrag.offsetHeight/2;
        if(left <= 0){
            left = 0;
        }
        if(top <= 0){
            top = 0;
        }
        var maxX = oBigPic.offsetWidth - oDrag.offsetWidth;
        if(left >= maxX){
            left = maxX;
        }
        var maxY = oBigPic.offsetHeight - oDrag.offsetHeight;
        if(top >= maxY){
            top = maxY;
        }
        oDrag.style.left = left + "px";
        oDrag.style.top = top + "px";

        //改变右侧大图的位置
        var scaleX = left / maxX;
        var scaleY = top / maxY;
        oMagnifyImg.style.left = -scaleX * (oMagnifyImg.offsetWidth - oMagnify.offsetWidth) + "px" ;
        oMagnifyImg.style.top = -scaleY * (oMagnifyImg.offsetHeight - oMagnify.offsetHeight) + "px" ;

    };

})();
