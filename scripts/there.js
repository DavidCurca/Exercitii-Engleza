var exercitii = [
    "some books on the table", // 1
    "many cars in the street", // 2
    "a picture on the wall", // 3
    "a pencil near the book", // 4
    "many trees in the forest", // 5
    "a cat under the table", // 6
    "seven apples in the fridge", // 7
    "a dog in the house", // 8
    "a monkey on the tree", // 9
    "many rooms in my house", // 10
    "an opera in our city", // 11
    "many girls in your class", // 12
    "a police-station near the hospital", // 13
    "some bananas in the basket", //14
    "some trees in the park", // 15
    "many peaople in the streets", // 16
    "some butter in te fridge", // 17
    "some plates on the table", // 18
    "some milk in the bottle", // 19
    "some coffee in the cup", // 20
    "someone looking at me", // 21
    "many boys in the school", // 22
    "some photos in her bag", // 23
    "some eggs in the fridge", // 24
    "a magazine in her room", // 25
    "a soccer stadium here", // 26
    "a boy, two babies and a dog in my garden", // 27
    "two babies, a boy, a girl and a dog in my", // 28
    "a clown looking at me", // 29
    "about fifty people at the party last week", // 30
    "a letter is the mailbox", // 31
    "a woman at the door", // 32
    "a computer in my bedroom", // 33 
    "a man looking at me. Do you think he knows me", // 34
    "two dogs and a cat in this house", // 35
    "many birds in the garden two days ago", // 36
    "several books left in that library, They are very expensive" // 37
]
var raspuns = [
    "There is", // 1
    "There are", // 2
    "There is", // 3
    "There is", // 4
    "There are", // 5
    "There is", // 6
    "There are", // 7
    "There is", // 8
    "There is", // 9
    "There are", // 10
    "There is", // 11
    "There are", // 12
    "There is", // 13
    "There are", // 14
    "There are", // 15
    "There are", // 16
    "There is", // 17
    "There are", // 18
    "There is", // 19
    "There is", // 20
    "There is", // 21
    "There are", // 22
    "There are", // 23
    "There are", // 24
    "There is", // 25
    "There is", // 26
    "There is", // 27
    "There are", // 28
    "There is", // 29
    "There are", // 30
    "There is", // 32
    "There is", // 33
    "There is", // 34
    "There are", // 35
    "There are", // 36
    "There are" // 37
]


var ii1 = document.getElementById("ii1");
var ii2 = document.getElementById("ii2");
var ii3 = document.getElementById("ii3");
var ii4 = document.getElementById("ii4");
var ii5 = document.getElementById("ii5");
var ii6 = document.getElementById("ii6");
var ii7 = document.getElementById("ii7");
var ii8 = document.getElementById("ii8");
var ii9 = document.getElementById("ii9");
var ii10 = document.getElementById("ii10");

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

var alese = [
    -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1 
]
var folsite = [
    -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1 
]
var scrise = [
    "_____", "_____", "_____", "_____", "_____",
    "_____", "_____", "_____", "_____", "_____"
]

for(var i = 0; i <= 9; i++){
    var fol = 0;
    var alegere = Math.floor(Math.random() * (38-2));
    while(gasit(alegere) == 1)
        alegere = Math.floor(Math.random() * (38-2));
    folsite[i] = alegere;
    console.log(alegere);
    
}

function afisare(){
    ii1.innerHTML = "1. " + scrise[0] + " " + exercitii[folsite[0]] + ".";
    ii2.innerHTML = "2. " + scrise[1] + " " + exercitii[folsite[1]] + ".";
    ii3.innerHTML = "3. " + scrise[2] + " " + exercitii[folsite[2]] + ".";
    ii4.innerHTML = "4. " + scrise[3] + " " + exercitii[folsite[3]] + ".";
    ii5.innerHTML = "5. " + scrise[4] + " " + exercitii[folsite[4]] + ".";
    ii6.innerHTML = "6. " + scrise[5] + " " + exercitii[folsite[5]] + ".";
    ii7.innerHTML = "7. " + scrise[6] + " " + exercitii[folsite[6]] + ".";
    ii8.innerHTML = "8. " + scrise[7] + " " + exercitii[folsite[7]] + ".";
    ii9.innerHTML = "9. " + scrise[8] + " " + exercitii[folsite[8]] + ".";
    ii10.innerHTML = "10. " + scrise[9] + " " + exercitii[folsite[9]] + ".";
}
afisare();

function rezolvare(){
    var corect = 0;
    for(var i = 0; i <= 9; i++){
        console.log(scrise[i] + " " + raspuns[folsite[i]]);
    }
    if(scrise[0] != raspuns[folsite[0]]){console.log(scrise[0] + " " + raspuns[folsite[0]]); s1.innerHTML = "0";i1.style.backgroundColor = "red";m1.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[1] != raspuns[folsite[1]]){console.log(scrise[2] + " " + raspuns[folsite[1]]); s2.innerHTML = "0";i2.style.backgroundColor = "red";m2.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[2] != raspuns[folsite[2]]){console.log(scrise[3] + " " + raspuns[folsite[2]]); s3.innerHTML = "0";i3.style.backgroundColor = "red";m3.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[3] != raspuns[folsite[3]]){console.log(scrise[4] + " " + raspuns[folsite[3]]); s4.innerHTML = "0";i4.style.backgroundColor = "red";m4.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[4] != raspuns[folsite[4]]){console.log(scrise[5] + " " + raspuns[folsite[4]]); s5.innerHTML = "0";i5.style.backgroundColor = "red";m5.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[5] != raspuns[folsite[5]]){console.log(scrise[6] + " " + raspuns[folsite[5]]); s6.innerHTML = "0";i6.style.backgroundColor = "red";m6.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[6] != raspuns[folsite[6]]){console.log(scrise[7] + " " + raspuns[folsite[6]]); s7.innerHTML = "0";i7.style.backgroundColor = "red";m7.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[7] != raspuns[folsite[7]]){console.log(scrise[8] + " " + raspuns[folsite[7]]); s8.innerHTML = "0";i8.style.backgroundColor = "red";m8.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[8] != raspuns[folsite[8]]){console.log(scrise[9] + " " + raspuns[folsite[8]]); s9.innerHTML = "0";i9.style.backgroundColor = "red";m9.innerHTML="Raspuns Gresit😥"}else{corect++;}
    if(scrise[9] != raspuns[folsite[9]]){console.log(scrise[10] + " " + raspuns[folsite[10]]); s10.innerHTML = "0";i10.style.backgroundColor = "red";m10.innerHTML="Raspuns Gresit😥"}else{corect++;}
    document.getElementById("scor").innerHTML = corect + "/24";
    document.getElementById("tab").style.display = "block";
}

function gasit(alg){
    for(var i = 0; i <= 9; i++){
        if(alg == folsite[i]){
            return 1;
            break;
        }
    }
    return 0;
}
