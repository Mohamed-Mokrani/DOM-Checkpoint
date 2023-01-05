let like = document.getElementsByClassName("heart");
let plus = document.getElementsByClassName("plus-btn");
let quant = document.getElementsByClassName("Quant");
let moins = document.getElementsByClassName("minus-btn");
let prix = document.getElementsByClassName("price");
let efface = document.getElementsByClassName("delete");
let sommefinale = document.getElementById("finalPrice");

let sommef = 2055;
const array = [];

for (let i = 0; i <= like.length; i++) {
  
  // Like
  like[i].style.color = "black";
  like[i].onclick = function () {
    if (like[i].style.color == "black") {
      like[i].style.color = "red";
    } else {
      like[i].style.color = "black";
    }
  };

  // plus
  array[i] = prix[i].textContent;
  plus[i].onclick = function () {
    quant[i].value = Number(quant[i].value) + 1;
    prix[i].innerHTML = (parseFloat(array[i]) * Number(quant[i].value)).toFixed(2);
    sommef += parseFloat(array[i]);
    sommefinale.value = sommef.toFixed(2);
  };

  // moins
  moins[i].onclick = function () {
    if (quant[i].value > 0) {
      quant[i].value = Number(quant[i].value) - 1;
      prix[i].innerHTML = (parseFloat(array[i]) * Number(quant[i].value)).toFixed(2);
      sommef -= parseFloat(array[i]);
      sommefinale.value = sommef.toFixed(2);
    }
  };

  // delete
  efface[i].onclick = function () {
    sommef -= parseFloat(prix[i].textContent);
    sommefinale.value = sommef.toFixed(2);
    quant[i].value = 0;
    prix[i].innerHTML = 0;
  };
}

