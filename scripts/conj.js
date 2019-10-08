const verbe = [
    "Beat", "Become", "Begin", "Bend", "Bet",
    "Bid", "Bite", "Blow", "Break", "Bring",
    "Build", "Burn", "Buy", "Catch", "Choose",
    "Come", "Cost", "Cut", "Dig", "Dive", "Do",
    "Draw", "Dream", "Drive", "Drink", "Eat",
    "Fall", "Feel", "Fight", "Find", "Fly",
    "Fly","Forget","Forgive","Freeze","Get",
    "Give","Go","Grow","Hang","Hear",
    "Hide","Hit","Hurt","Keep","Know",
    "Lay","Lead","Leave","Lend","Let",
    "Lie","Lose","Make","Mean","Meet",
    "Pay","Put","Read","Ride","Ring",
    "Rise","Run","Say","See","Sell",
    "Send","Sing","Show","Sit","Speak",
    "Spend","Swim","Take","Teach","Tear",
    "Tell","Think","Wear","Write","Win"
]

var index = Math.floor(Math.random() * 80);
//console.log(verbe[index]);
document.getElementById("verbs").innerHTML = "Verb: " + verbe[index];
var copie = verbe[index];
var ult = copie[copie.length - 1];
var pen = copie[copie.length - 2];
var tre = copie[copie.length - 3];
//console.log(ult);
//console.log(pen);

if((ult == "s" && pen == "s") || (ult == "h" && pen == "s") || (ult == "h" && pen == "c") || (ult == "h" && pen == "c" && tre == "t") || (ult == "z" && pen == "z") || ult == "x"){
    copie += "es";
}else if(ult == "o"){
    copie += "es";
}else if(esteCons(pen) && ult == 'y'){
    copie = setCharAt(copie,copie.length - 1,'i');
    copie += "es";
}else if(ult == "e" || ult == "w" || ult == "y" || esteCons(pen)){
    copie += "s";
}
/*
console.log("Afirmativ");
console.log("I " + verbe[index]);
console.log("You " + verbe[index]);
console.log("he " + copie);
console.log("she " + copie);
console.log("it " + copie);
console.log("we " + verbe[index]);
console.log("you " + verbe[index]);
console.log("they " + verbe[index]);
console.log("-----------------------------------");
console.log("Negativ");
console.log("I don't " + verbe[index]);
console.log("You don't " + verbe[index]);
console.log("he doesn't " + verbe[index]);
console.log("she doesn't " + verbe[index]);
console.log("it doesn't " + verbe[index]);
console.log("we dont't " + verbe[index]);
console.log("you dont't " + verbe[index]);
console.log("they dont't " + verbe[index]);
console.log("-----------------------------------");
console.log("Interogativ");
console.log("Do I " + verbe[index] + "?");
console.log("Do You " + verbe[index] + "?");
console.log("Does he " + verbe[index] + "?");
console.log("Does she " + verbe[index] + "?");
console.log("Does it " + verbe[index] + "?");
console.log("Do we " + verbe[index] + "?");
console.log("Do you " + verbe[index] + "?");
console.log("Do they " + verbe[index] + "?");
*/

function rezolva(){
    var corect = 0;
    var corecte = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]

    var table = document.getElementById("tab");

    var inter1 = document.getElementById("intr1").value;
    var inter2 = document.getElementById("intr2").value;
    var inter3 = document.getElementById("intr3").value;
    var inter4 = document.getElementById("intr4").value;
    var inter5 = document.getElementById("intr5").value;
    var inter6 = document.getElementById("intr6").value;
    var inter7 = document.getElementById("intr7").value;
    var inter8 = document.getElementById("intr8").value;
    
    var af11 = document.getElementById("af11").value; var af12 = document.getElementById("af12").value;
    var af21 = document.getElementById("af21").value; var af22 = document.getElementById("af22").value;
    var af31 = document.getElementById("af31").value; var af32 = document.getElementById("af32").value;
    var af41 = document.getElementById("af41").value; var af42 = document.getElementById("af42").value;
    var af51 = document.getElementById("af51").value; var af52 = document.getElementById("af52").value;
    var af61 = document.getElementById("af61").value; var af62 = document.getElementById("af62").value;
    var af71 = document.getElementById("af71").value; var af72 = document.getElementById("af72").value;
    var af81 = document.getElementById("af81").value; var af82 = document.getElementById("af82").value;
    
    var neg11 = document.getElementById("neg11").value; var neg12 = document.getElementById("neg12").value;
    var neg21 = document.getElementById("neg21").value; var neg22 = document.getElementById("neg22").value;
    var neg31 = document.getElementById("neg31").value; var neg32 = document.getElementById("neg32").value;
    var neg41 = document.getElementById("neg41").value; var neg42 = document.getElementById("neg42").value;
    var neg51 = document.getElementById("neg51").value; var neg52 = document.getElementById("neg52").value;
    var neg61 = document.getElementById("neg61").value; var neg62 = document.getElementById("neg62").value;
    var neg71 = document.getElementById("neg71").value; var neg72 = document.getElementById("neg72").value;
    var neg81 = document.getElementById("neg81").value; var neg82 = document.getElementById("neg82").value;

    var i1 = document.getElementById("i1"); var m1 = document.getElementById("m1"); var s1 = document.getElementById("s1");
    var i2 = document.getElementById("i2"); var m2 = document.getElementById("m2"); var s2 = document.getElementById("s2");
    var i3 = document.getElementById("i3"); var m3 = document.getElementById("m3"); var s3 = document.getElementById("s3");
    var i4 = document.getElementById("i4"); var m4 = document.getElementById("m4"); var s4 = document.getElementById("s4");
    var i5 = document.getElementById("i5"); var m5 = document.getElementById("m5"); var s5 = document.getElementById("s5");
    var i6 = document.getElementById("i6"); var m6 = document.getElementById("m6"); var s6 = document.getElementById("s6");
    var i7 = document.getElementById("i7"); var m7 = document.getElementById("m7"); var s7 = document.getElementById("s7");
    var i8 = document.getElementById("i8"); var m8 = document.getElementById("m8"); var s8 = document.getElementById("s8");
    var i9 = document.getElementById("i9"); var m9 = document.getElementById("m9"); var s9 = document.getElementById("s9");
    var i10 = document.getElementById("i10"); var m10 = document.getElementById("m10"); var s10 = document.getElementById("s10");
    var i11 = document.getElementById("i11"); var m11 = document.getElementById("m11"); var s11 = document.getElementById("s11");
    var i12 = document.getElementById("i12"); var m12 = document.getElementById("m12"); var s12 = document.getElementById("s12"); 
    var i13 = document.getElementById("i13"); var m13 = document.getElementById("m13"); var s13 = document.getElementById("s13");
    var i14 = document.getElementById("i14"); var m14 = document.getElementById("m14"); var s14 = document.getElementById("s14");
    var i15 = document.getElementById("i15"); var m15 = document.getElementById("m15"); var s15 = document.getElementById("s15");
    var i16 = document.getElementById("i16"); var m16 = document.getElementById("m16"); var s16 = document.getElementById("s16");
    var i17 = document.getElementById("i17"); var m17 = document.getElementById("m17"); var s17 = document.getElementById("s17");
    var i18 = document.getElementById("i18"); var m18 = document.getElementById("m18"); var s18 = document.getElementById("s18");
    var i19 = document.getElementById("i19"); var m19 = document.getElementById("m19"); var s19 = document.getElementById("s19");
    var i20 = document.getElementById("i20"); var m20 = document.getElementById("m20"); var s20 = document.getElementById("s20");
    var i21 = document.getElementById("i21"); var m21 = document.getElementById("m21"); var s21 = document.getElementById("s21");
    var i22 = document.getElementById("i22"); var m22 = document.getElementById("m22"); var s22 = document.getElementById("s22");
    var i23 = document.getElementById("i23"); var m23 = document.getElementById("m23"); var s23 = document.getElementById("s23");
    var i24 = document.getElementById("i24"); var m24 = document.getElementById("m24"); var s24 = document.getElementById("s24");

    if(inter1 == verbe[index]){ corect++; corecte[0] = 1;}else{corecte[0] = 0;}
    if(inter2 == verbe[index]){ corect++; corecte[1] = 1;}else{corecte[1] = 0;}
    if(inter3 == copie){ corect++; corecte[2] = 1;}else{corecte[2] = 0;}
    if(inter4 == copie){ corect++; corecte[3] = 1;}else{corecte[3] = 0;}
    if(inter5 == copie){ corect++; corecte[4] = 1;}else{corecte[4] = 0;}
    if(inter6 == verbe[index]){ corect++; corecte[5] = 1;}else{corecte[5] = 0;}
    if(inter7 == verbe[index]){ corect++; corecte[6] = 1;}else{corecte[6] = 0;}
    if(inter8 == verbe[index]){ corect++; corecte[7] = 1;}else{corecte[7] = 0;}

    if(af11 == "Don't" && af12 == verbe[index]){ corect++; corecte[8] = 1;}else{corecte[8] = 0;}
    if(af21 == "Don't" && af22 == verbe[index]){ corect++; corecte[9] = 1;}else{corecte[9] = 0;}
    if(af31 == "Doesn't" && af32 == verbe[index]){ corect++; corecte[10] = 1;}else{corecte[10] = 0;}
    if(af41 == "Doesn't" && af42 == verbe[index]){ corect++; corecte[11] = 1;}else{corecte[11] = 0;}
    if(af51 == "Doesn't" && af52 == verbe[index]){ corect++; corecte[12] = 1;}else{corecte[12] = 0;}
    if(af61 == "Don't" && af62 == verbe[index]){ corect++; corecte[13] = 1;}else{corecte[13] = 0;}
    if(af71 == "Don't" && af72 == verbe[index]){ corect++; corecte[14] = 1;}else{corecte[14] = 0;}
    if(af81 == "Don't" && af82 == verbe[index]){ corect++; corecte[15] = 1;}else{corecte[15] = 0;}
    
    if(neg11 == "Do" && neg12 == verbe[index]){ corect++; corecte[16] = 1;}else{corecte[16] = 0;}
    if(neg21 == "Do" && neg22 == verbe[index]){ corect++; corecte[17] = 1;}else{corecte[17] = 0;}
    if(neg31 == "Does" && neg32 == verbe[index]){ corect++; corecte[18] = 1;}else{corecte[18] = 0;}
    if(neg41 == "Does" && neg42 == verbe[index]){ corect++; corecte[19] = 1;}else{corecte[19] = 0;}
    if(neg51 == "Does" && neg52 == verbe[index]){ corect++; corecte[20] = 1;}else{corecte[20] = 0;}
    if(neg61 == "Do" && neg62 == verbe[index]){ corect++; corecte[21] = 1;}else{corecte[21] = 0;}
    if(neg71 == "Do" && neg72 == verbe[index]){ corect++; corecte[22] = 1;}else{corecte[22] = 0;}
    if(neg81 == "Do" && neg82 == verbe[index]){ corect++; corecte[23] = 1;}else{corecte[23] = 0;}
    //console.log(corect);
    table.style.display = "block";
    if(corecte[0] == 0){s1.innerHTML = "0";i1.style.backgroundColor = "red";m1.innerHTML="Raspuns Gresit😥"}
    if(corecte[1] == 0){s2.innerHTML = "0";i2.style.backgroundColor = "red";m2.innerHTML="Raspuns Gresit😥"}
    if(corecte[2] == 0){s3.innerHTML = "0";i3.style.backgroundColor = "red";m3.innerHTML="Raspuns Gresit😥"}
    if(corecte[3] == 0){s4.innerHTML = "0";i4.style.backgroundColor = "red";m4.innerHTML="Raspuns Gresit😥"}
    if(corecte[4] == 0){s5.innerHTML = "0";i5.style.backgroundColor = "red";m5.innerHTML="Raspuns Gresit😥"}
    if(corecte[5] == 0){s6.innerHTML = "0";i6.style.backgroundColor = "red";m6.innerHTML="Raspuns Gresit😥"}
    if(corecte[6] == 0){s7.innerHTML = "0";i7.style.backgroundColor = "red";m7.innerHTML="Raspuns Gresit😥"}
    if(corecte[7] == 0){s8.innerHTML = "0";i8.style.backgroundColor = "red";m8.innerHTML="Raspuns Gresit😥"}
    if(corecte[8] == 0){s9.innerHTML = "0";i9.style.backgroundColor = "red";m9.innerHTML="Raspuns Gresit😥"}
    if(corecte[9] == 0){s10.innerHTML = "0";i10.style.backgroundColor = "red";m10.innerHTML="Raspuns Gresit😥"}
    if(corecte[10] == 0){s11.innerHTML = "0";i11.style.backgroundColor = "red";m11.innerHTML="Raspuns Gresit😥"}
    if(corecte[11] == 0){s12.innerHTML = "0";i12.style.backgroundColor = "red";m12.innerHTML="Raspuns Gresit😥"}
    if(corecte[12] == 0){s13.innerHTML = "0";i13.style.backgroundColor = "red";m13.innerHTML="Raspuns Gresit😥"}
    if(corecte[13] == 0){s14.innerHTML = "0";i14.style.backgroundColor = "red";m14.innerHTML="Raspuns Gresit😥"}
    if(corecte[14] == 0){s15.innerHTML = "0";i15.style.backgroundColor = "red";m15.innerHTML="Raspuns Gresit😥"}
    if(corecte[15] == 0){s16.innerHTML = "0";i16.style.backgroundColor = "red";m16.innerHTML="Raspuns Gresit😥"}
    if(corecte[16] == 0){s17.innerHTML = "0";i17.style.backgroundColor = "red";m17.innerHTML="Raspuns Gresit😥"}
    if(corecte[17] == 0){s18.innerHTML = "0";i18.style.backgroundColor = "red";m18.innerHTML="Raspuns Gresit😥"}
    if(corecte[18] == 0){s19.innerHTML = "0";i19.style.backgroundColor = "red";m19.innerHTML="Raspuns Gresit😥"}
    if(corecte[19] == 0){s20.innerHTML = "0";i20.style.backgroundColor = "red";m20.innerHTML="Raspuns Gresit😥"}
    if(corecte[20] == 0){s21.innerHTML = "0";i21.style.backgroundColor = "red";m21.innerHTML="Raspuns Gresit😥"}
    if(corecte[21] == 0){s22.innerHTML = "0";i22.style.backgroundColor = "red";m22.innerHTML="Raspuns Gresit😥"}
    if(corecte[22] == 0){s23.innerHTML = "0";i23.style.backgroundColor = "red";m23.innerHTML="Raspuns Gresit😥"}
    if(corecte[23] == 0){s24.innerHTML = "0";i24.style.backgroundColor = "red";m24.innerHTML="Raspuns Gresit😥"}

    if(corect == 24)
        console.log("Esti jmk");
    else
        console.log("Esti un noob! Hahaha");
    document.getElementById("scor").innerHTML = corect + "/24";
        
}

function loading(){
    
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function esteCons(chr){
    if(chr != "a" || chr != "e" || chr != "i" || chr != "o" || chr != "u")
        return 1;
    return 0;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

/// a e i o u 