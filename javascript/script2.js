var a = +prompt("Kettu o'rta qiymatni chiramiz")
var num1 = +prompt("1-sonni kiriting")
while(isNaN(num1) || num1==0){
    num1 = +prompt("siz son kiritmadingiz")
}
var num2 = +prompt("2-sonni kiriting")
while(isNaN(num2) || num2==0){
    num2 = +prompt("siz son kiritmadingiz")
}
var num3 = +prompt("3-sonni kiriting")
while(isNaN(num3) || num3==0){
    num3 = +prompt("siz son kiritmadingiz")
}

if (!isNaN(num2) && num1<num2 && num2<num3 || num2<num3 && num2>num1) {
    alert("o'rta qiymat " + num2)
} 
else if (!isNaN(num1) && num2<num1 && num1<num3 || num3<num1 && num1<num2) {
    alert("o'rta qiymat " + num1)
}
else if (!isNaN(num3) && num1<num3 && num3<num2 || num2<num3 && num3<num1) {
    alert("o'rta qiymat " + num3)
}
else{
    alert("bopladis okam 5 baho sizga bering kundaligizni")
}
