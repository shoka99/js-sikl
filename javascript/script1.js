var son = +prompt("Yoshizni kiriting")
if(son<=18){
    alert("O'qing odam bo'lasiz")
}
else if(!isNaN(son) && son>18 && son<=50){
    alert("Soqqani qilish kerak voqt o'tib ketvotti");
}
else if(!isNaN(son) && son>50 && son<59){
    alert("Pensiya vaqti yaqinlashib qobdiyu sog'likga etiborli bo'ling");
}
else if(!isNaN(son) && son>59 && son<=100){
    alert("Qarilik gashtini suring, sog' bo'ling");
}
else if(!isNaN(son) && son>100 && son<130){
    alert("Rekord yosh 130 ga oz qobdiyu Otahon")
}
else{
    alert("Bo'lishi mumkin emas");
}