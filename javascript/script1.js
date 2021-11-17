var raqam = +prompt("Yoshizni kiriting") 
 while(isNaN(raqam) || raqam == 0){   
    raqam = +prompt("siz raqam kiritmadingiz")
}
if(!isNaN(raqam) && raqam<=18){
    alert("O'qish kere bu vaqta")
}
else if(!isNaN(raqam) && raqam>18 && raqam<=50){
alert("Soqqani qilish kerak voqt o'tib ketvotti");
}
else if(!isNaN(raqam) && raqam>50 && raqam<59){
    alert("Pensiya vaqti yaqinlashib qobdiyu sog'likga etiborli bo'ling");
}
else if(!isNaN(raqam) && raqam>59 && raqam<=100){
    alert("Qarilik gashtini suring, sog' bo'ling");
}
else if(!isNaN(raqam) && raqam>100 && raqam<130){
    alert("Rekord yosh 130 ga oz qobdiyu Otahon")
}
else{
    alert("Bo'lishi mumkin emas");
}
