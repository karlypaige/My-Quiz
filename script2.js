
//for access to sections
var sectionHeader = document.querySelector("#timer");
var sectionTitle = document.querySelector("#sectionTitle");
var quizBody = document.querySelector("#quizBody");
var quizResponse = document.querySelector("#response");

//object of questions and answers
var questions = {
    "Question 1": ["answer 1", "pick me", "answer 3", "answer 4", 2],
    "Question 2": ["chicken", "monkey", "cow", "pick me", 4],
    "Question 3": ["", "pick me", "", "", 2],
    "Question 4": ["", "", "pick me", "", 3],
    "Question 5": ["", "", "", "pick me", 4],
    "Question 6": ["", "pick me", "", "", 2],
    "Question 7": ["", "pick me", "", "", 2],
    "Question 8": ["pick me", "", "", "", 1],
    "Question 9": ["", "", "pick me", "", 3],
    "Question 10": ["", "", "", "pick me", 4],
    "Question 11": ["", "pick me", "", "", 2],
    "Question 12": ["pick me", "", "", "", 1],
    "Question 13": ["", "pick me", "", "", 2],
    "Question 14": ["", "", "pick me", "", 3],
    "Question 15": ["", "pick me", "", "", 2],
    "Question 16": ["pick me", "", "", "", 1],
    "Question 17": ["", "", "", "pick me", 4],
    "Question 18": ["", "pick me", "", "", 2],
    "Question 19": ["", "pick me", "", "", 2],
    "Question 20": ["", "", "", "pick me", 4],
    "Question 21": ["pick me", "", "", "", 1],
    "Question 22": ["", "", "", "pick me", 4],
    "Question 23": ["", "", "", "pick me", 4],
    "Question 24": ["", "", "", "pick me", 4],
    "Question 25": ["", "", "", "pick me", 4],
    "Question 26": ["pick me", "", "", "", 1],
    "Question 27": ["", "pick me", "", "", 2],
    "Question 28": ["", "", "pick me", "", 3],
    "Question 29": ["", "pick me", "", "", 2],
    "Question 30": ["", "", "", "pick me", 4],
    "Question 31": ["", "", "pick me", "", 3]
};


//flags and userinput variables
var totalSeconds = 0;
var timerInterval;
var timerFlag = false;
var clickFlag = false;
var answer;
var i = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

//button variables
var button1;
var button2;
var button3;
var button4;



//initial load of page creates a start button
sectionTitle.innerHTML = "<h1>This is my Quiz</h1>"
quizBody.innerHTML = "<button id=\"start\">Start</button>";
var startButton = document.querySelector("#start");

function startTimer() {
    timerFlag = true;
    
    // Create the countdown timer.
    timerInterval = setInterval(function() {
    
        //interval components
    totalSeconds--;
    if(totalSeconds <= 0) {
        clearInterval(timerInterval);
        timerFlag = false;
    };

    //display time left
    sectionHeader.innerHTML = totalSeconds;

    }, 1000);

    //start quiz
    if(timerFlag == true){      //if timer is still running
        do{
            if (clickFlag == false){
                console.log("clickFlag 1: " + clickFlag);
                checkAnswer(getAnswer(), getButton());
                console.log("clickFlag 2: " + clickFlag);
                i++;
            }
        } while (i<Object.keys(questions).length);
    }
    else {
        endQuiz();
    };
};

function getAnswer() {
    if(timerFlag){      //if there are still questions left in the questions object
        answer = setQuestion(i);                             //get next question/answer
    }
    else {
        endQuiz();
    };
};

function getButton() {
    console.log("you are in getButton");
    //var userAnswer = 0;
    clickFlag = false;

    // function checkFlag() {
    //     if(clickFlag == true){
    //         // clickFlag = false;
    //         i++;
    //         console.log("userAnswer is " + userAnswer);
    //         return userAnswer;
    //     }
    // };

    // button1.addEventListener("click", function(){clickFlag = true; userAnswer = 1; checkFlag();});
    // button2.addEventListener("click", function(){clickFlag = true; userAnswer = 2; checkFlag();});
    // button3.addEventListener("click", function(){clickFlag = true; userAnswer = 3; checkFlag();});
    // button4.addEventListener("click", function(){clickFlag = true; userAnswer = 4; checkFlag();});

    //TRY MAKING IT AN OBJECT...
    var thisObject = {
        userAnswer: 0,
        thisFunction: function(){
            button1.onclick = function() {
                userAnswer = 1; clickFlag = true;
            }
            button2.onclick = function() {
                userAnswer = 2; clickFlag = true;
            }
            button3.onclick = function() {
                userAnswer = 3; clickFlag = true;
            }
            button4.onclick = function() {
                userAnswer = 4; clickFlag = true;
            }
        }
    }   

    if(clickFlag == true){
        clickFlag = false;
        i++;
        console.log("userAnswer is " + userAnswer);
        return userAnswer;
    }

};

function setQuestion(loopNum){
    sectionTitle.textContent = Object.keys(questions)[loopNum];

    // console.log("button1 = " + button1.textContent)
    button1.textContent = Object.values(questions)[loopNum][0];
    button2.textContent = Object.values(questions)[loopNum][1];
    button3.textContent = Object.values(questions)[loopNum][2];
    button4.textContent = Object.values(questions)[loopNum][3];

    //store correct answer
    return Object.values(questions)[loopNum][4];
};

function checkAnswer(ans1, ans2){
    if (ans1 == ans2){
        quizResponse.textContent = "you are correct!";
        correctAnswers++
    } else {
        quizResponse.textContent = "sorry that is wrong you lose 5 seconds";
        totalSeconds -= 5;
        wrongAnswers++
    }
}

function playTimer() {
    totalSeconds = 60;

    //create buttons for quiz answer options
    sectionTitle.innerHTML = "<h1>This is a Question</h1>"
    quizBody.innerHTML = "<button class=\"answer\" id=\"opt1\">Option 1</button></br>"
    + "<button class=\"answer\" id=\"opt2\">Option 2</button></br>"
    + "<button class=\"answer\" id=\"opt3\">Option 3</button></br>"
    + "<button class=\"answer\" id=\"opt4\">Option 4</button></br>"

    button1 = document.querySelector("#opt1");
    button2 = document.querySelector("#opt2");
    button3 = document.querySelector("#opt3");
    button4 = document.querySelector("#opt4");

    startTimer();
}

function endQuiz(){
    sectionTitle.textContent = "";
    quizBody.innerHTML = "<h1>the quiz has ended</h1><p>You got " + correctAnswers + " answers correct and " + wrongAnswers + " answers wrong </p>";
    quizResponse.textContent = "";
}

startButton.addEventListener("click", playTimer);

