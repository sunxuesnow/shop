(function () {
    var aClose = document.getElementsByClassName("cart-close");
    var aCartDetail = document.getElementsByClassName("cart-detail");
    var oCartMenu = document.getElementById("cart-menu");
    for(var i=0; i<aClose.length; i++){
        aClose[i].index = i;
        aClose[i].onclick = function () {
            oCartMenu.removeChild(aCartDetail[this.index]);
            for(var i=0;i<aClose.length; i++){
                aClose[i].index = i;
            }
        };
    }

})();