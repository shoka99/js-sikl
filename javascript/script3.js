var son = +prompt("Hohlagan sonizni kiriting toq yoki juftligini aniqlab beramiz")
while(isNaN(son) || son==0){
    son=+prompt("siz son kiritmadingiz")
}
if(son%2==0){
alert(son +" juft son")}
else if(son %2==1){
    alert(son +" toq son")
}
