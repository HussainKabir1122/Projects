var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    if(playing == true){    //if we are playing
        location.reload();  //reload page
    }else{      //if we are not playing
        playing =true; //change mode to playing

        score = 0;  //set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        
        //show count down box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box

        hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        //generate a new Q&A
        generateQA();

    }
}

for(i=1;i<5;i++){
document.getElementById("option"+i).onclick = function(){
    //check if we are playing
    if(playing==true){
        if(this.innerHTML == correctAnswer){
            //correct answer
            score+=1; //increase score 
            document.getElementById("scorevalue").innerHTML = score;

            //hide wrong box
            hide("wrong");
            show("correct");
            setTimeout(function(){ //hiding correct after 1 sec
                hide("correct");
            },1000);
            //generate new question
            generateQA();
        }else{
            //wrong answer
            //hide wrong box
            hide("correct");
            show("wrong");
            setTimeout(function(){ //hiding correct after 1 sec
                hide("wrong");
            },1000);

        }
    }
}
}

//if we click on answer box
    //if we are playing
        //correct??
            //yes
                //increase score by one
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1 sec


//function


//start counting time
function startCountdown(){
    action =setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining==0){//game over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game over!</p><p>your score is "+score+".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";


        }
    },1000);
}

//stop counting time
function stopCountdown(){
    clearInterval(action);
}

// hiding an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

// showing an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}


//generate question answer

function generateQA(){

    var x= 1+ Math.round(9*Math.random());
    var y= 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" +y;

    var correctPosition = 1+ Math.round(3*Math.random());

    document.getElementById("option"+correctPosition).innerHTML = correctAnswer;// fill correct answer


    //fill wrong answer other boxes
    var answers =[correctAnswer];
    for(i=1;i<5;i++){
        if(i !== correctPosition){
            var wrongAnswer;

            //checking wrong is different from correct answer
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //creating wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)

            document.getElementById("option"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

}


//if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show count down box
        //reduce time by 1 sec in loops
            //if time left
                //yes --> continue
                //no --> gameover
        //change button to reset
        //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct??
            //yes
                //increase score by one
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1 sec