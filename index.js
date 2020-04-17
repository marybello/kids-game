function startGame(){
    var q1 = document.getElementsById("mygame").q1.value;
    var q2 = document.getElementsByName("q2").value;
    var q3 = document.getElementsByName("q3").value;
    var q4 = document.getElementsByName("q4");
    var q5 = document.getElementsByName("q5");
    var q6 = document.getElementsByName("q6");
    var q7 = document.getElementsByName("q7");
    var q8 = document.getElementsByName("q8");
    var q9 = document.getElementsByName("q9");
    var q10 = document.getElementsByName("q10");
    var score = 0;
    
    if (q1 == 4){
        score++;
    }
    if (q2 == 3){
        score++;
    }
    if (q3 == 7){
        score++;
    }
    if (q4 == 0){
        score++;
    }
    if (q5 == 8){
        score++;
    }
    if (q6 == 1){
        score++;
    }
    if (q7 == 11){
        score++;
    }
    if (q8 == 2){
        score++;
    }
    if (q9 == 5){
        score++;
    }
    if (q10 == 4){
        score++;
    }

    var response = ["Wow, that's awesome", "It's Fair enough but you can do better", "Not Good enough, you need to study your mathematics more", "This is Bad!"];
    for (var i = 0; i < response.length; i++) {
        if(score == 8 || score <=10) {
            response [i = 0];
        }
        if( score == 5 || score < 8){
            response [i = 1];
        }
        if(score == 3 || score < 5){
            response [i = 2];
        }
        if(score < 3) {
            response [i = 3];
        } 
    }
    
    document.getElementById("formsubmit").style.visibility = "visible";
    document.getElementById("myscores").innerHTML = "you scored " +  score + "/10";

   document.getElementById("comments").innerHTML = response[i]; 

}