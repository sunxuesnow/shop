var oChoose = document.getElementById("choose");
var aClassify = oChoose.getElementsByClassName("classify");
var aSubMenu = oChoose.getElementsByClassName("submenu");

for(var i=0; i<aClassify.length; i++){
    aClassify[i].index = i;
    aClassify.bFlag = false;
    aClassify[i].addEventListener("click" , function () {
        if(this.bFlag){
            aSubMenu[this.index].style.display = "none";

        }else{
            aSubMenu[this.index].style.display = "block";
        }
        this.bFlag = ! this.bFlag;
    }, false);
}