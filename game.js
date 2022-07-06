User__name_1 = localStorage.getItem("user_1");
User__name_2 = localStorage.getItem("user_2");
player_score = 0;
player__score = 0;
document.getElementById("user1_st").innerHTML = User__name_1 + ":";
document.getElementById("user2_nd").innerHTML = User__name_2 + ":";
document.getElementById("score_player1").innerHTML = player_score;
document.getElementById("score_player2").innerHTML = player__score;
document.getElementById("Question_turn").innerHTML = "Question Turn - " + User__name_1;
document.getElementById("Answer_turn").innerHTML = "Answer Turn - " + User__name_2;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualans=parseInt(number1)*parseInt(number2);

    que_word = "<h4>"+ number1 +" X "+ number2 + "</h4>";
    inputans = "<br> Answer : <input type='text' id='typeAns'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    divoutput = que_word + inputans + check_button;
    document.getElementById("output").innerHTML = divoutput;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
questionturn = "player1";
answerturn = "player2";

function check(){
    get_answer = document.getElementById("typeAns").value;
    if (get_answer == actualans){
        if (answerturn == "player1"){
            player_score = player_score + 1;
            document.getElementById("score_player1").innerHTML = player_score;
        }
        else{
            player__score = player__score + 1;
            document.getElementById("score_player2").innerHTML = player__score;
        }
    }
    if (questionturn=="player1"){
        questionturn="player2";
        document.getElementById("Question_turn").innerHTML = "Question Turn - " + User__name_2;
    }
    else{
        questionturn="player1";
        document.getElementById("Question_turn").innerHTML = "Question Turn - " + User__name_1;
    }
    if (answerturn=="player1"){
        answerturn="player2";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn - " + User__name_2;
    }
    else{
        answerturn="player1";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn - " + User__name_1;
    }
    document.getElementById("output").innerHTML = "";
}