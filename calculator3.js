// Ex3 : Selectors API Level1
window.addEventListener("load", function() {
    var section3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='x']");
    var txtY =section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
    
// css selector 의 표현방법이 풍부하고 정밀해서 여러가지가 있다. 
    
    /*
    var inputs = sections2.getElementsByTagName("input");
   
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */
    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);


        txtSum.value = x+y;
    };
});


    