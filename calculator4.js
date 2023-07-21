// Ex4 : childNodes를 이용한 노드 선택
window.addEventListener("load", function() {
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0]; // childNodes[0];
    var input2 = box.children[1]; // childNodes[1];

    input1.value = "hello";
    input2.value = "okay";
 
});


    