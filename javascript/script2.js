var a = +prompt("Kettu o'rta qiymatni chiramiz")
var num1 = +prompt("1-sonni kiriting")
var num2 = +prompt("2-sonni kiriting")
var num3 = +prompt("3-sonni kiriting")

if (num1<num2 && num2<num3 || num2<num3 && num2>num1) {
    alert("o'rta qiymat " + num2)
} 
else if (num2<num1 && num1<num3 || num3<num1 && num1<num2) {
    alert("o'rta qiymat " + num1)
}
else if (num1<num3 && num3<num2 || num2<num3 && num3<num1) {
    alert("o'rta qiymat " + num3)
}
else{
    alert("bopladis okam 5 baho sizga bering kundaligizni")
}
