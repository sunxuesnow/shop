(function () {
    var oChoose = document.getElementById("choose");
    var aClassify = oChoose.getElementsByClassName("classify");
    var aSubMenu = oChoose.getElementsByClassName("submenu");

    for(var i=0; i<aClassify.length; i++){
        aClassify[i].index = i;
        aClassify.bFlag = false;
        aClassify[i].addEventListener("click" , function () {

            if(this.bFlag){
               // aSubMenu[this.index].style.display = "none";
                aSubMenu[this.index] && animate(aSubMenu[this.index] , {
                    height : 0
                });
            }else{
               // aSubMenu[this.index].style.display = "block";
               // for(var i=0; i<aClassify.length; i++){
               //     animate(aSubMenu[i] , {
               //         height : 0
               //     });
               // }
               aSubMenu[this.index] && animate(aSubMenu[this.index] , {
                    height : 230
                });
            }
            this.bFlag = !this.bFlag;
        }, false);
    }
})();