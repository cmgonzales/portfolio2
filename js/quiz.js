//Question
var myQuestion = [
    {
        question: "What noise that warns you of danger?",
        answer:"alarm"
    },
    
    {
        question: "What does a group of musician called",
        answer:"band"
    },
    {
        question: "What does a person called who works with wood?",
        answer:"carpenter"
    },
    {
        question: "What is 12/3",
        answer: "4"
    },
    {
        question: "What is a circular food from Italy?",
        answer:"pizza"
    },
    
    {
        question: "how do you turn a door knob?",
        answer:"clockwise"
    },
    {
        question: "What is the color of the sky",
        answer:"blue"
    },
    {
        question: "What is the color of the grass",
        answer:"green"
    },
    ]
    
    for(var i = 0; i <myQuestion.length; i++){
        var question = myQuestion[i].question;
        var el = document.getElementById('question' + [i]);
        el.textContent = question;
    }
    
    function result(){
    for(var i = 0; i < myQuestion.length; i++){
        var answer = myQuestion[i].answer;
        var guess = document.getElementById("answer" + [i]).value;
       if(answer == guess){
           console.log("correct");
          $("#check" + [i]).html("&#10004;").css("color", "green");
       }else if(answer != guess){
        $("#check" + [i]).text('X').css("color", "red");
    }else{
       }   
    }
    }
    