var playing=false;
var score;
var action;
var timer;
var correctans;
//if we click on the start/reset button
document.getElementById("startreset").onclick=
function(){
    //if we are playing
    if(playing==true){
        location.reload();//reload our page
    }
    else{
        //if we are notplaying
        playing=true;
        score=0;//scorevalue
        document.getElementById("scorevalue").innerHTML = score;
        show("timer");
        timer=60;
        hide("gameover");
        document.getElementById("counting").innerHTML= timer;
        document.getElementById("startreset").innerHTML= "Reset Game";
        //start countdown
        startcountdown();
        //generate a question and multiple answers

        generate();
    }
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=
function(){
    if(playing==true){
        if(this.innerHTML==correctans){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generate();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}


//Functions
function startcountdown(){
    action = setInterval(function(){
        timer -= 1;
        document.getElementById("counting").innerHTML= timer;
        if(timer==0){
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game over!!</p><p>Your score is "+score+". </p>";
            hide("timer");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000)
}
function stopcountdown(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
function generate(){
    var x= Math.round(10*Math.random());
    var y= Math.round(10*Math.random());
     correctans= x*y;
     document.getElementById("questions").innerHTML= x+ "x" +y;

     var correctpos= 1+ Math.round(3*Math.random());
     document.getElementById("box"+correctpos).innerHTML= correctans;//fill one of the boxes with the correct ans
     for(i=1;i<5;i++){
        if(i !== correctpos){
            var wrongans;
           do{
            wrongans=(Math.round(10*Math.random()))*(Math.round(10*Math.random()));

           } while(wrongans==correctans)
                
            
            document.getElementById("box"+i).innerHTML=wrongans;

        }
     }

}