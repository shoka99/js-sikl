alert("Son kiritib darajasini bilgilab bering Biz javobini chiqarib beramiz")
var son=+prompt("Son kiriting")
while(isNaN(son) || son==0){
    son=+prompt("Siz son kiritmadingiz")
}
var daraja=+prompt("Darajani belgilang")
while(isNaN(daraja) || daraja==0){
    daraja=+prompt("Son kiriting")
}
javob=son
for (let i = 1; i < daraja; i++) {
    javob*=son
    
}
alert("Siz "+son+" darajasi "+daraja+" kiritdingiz. javob:"+javob );
