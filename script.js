
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
var userAnswer;
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
        endQuiz();
    };

    //display time left
    sectionHeader.innerHTML = totalSeconds;

    }, 1000);
};

function setQuestion(loopNum){
    console.log("we are here");
    sectionTitle.textContent = Object.keys(questions)[loopNum];
    console.log("we are here " + Object.keys(questions)[loopNum]);
    // console.log("button1 = " + button1.textContent)
    button1.textContent = Object.values(questions)[loopNum][0];
    button2.textContent = Object.values(questions)[loopNum][1];
    button3.textContent = Object.values(questions)[loopNum][2];
    button4.textContent = Object.values(questions)[loopNum][3];

    clickFlag = true;
    //store correct answer
    console.log("we are here " + Object.values(questions)[loopNum][4]);
    console.log("we are here " + loopNum);
    console.log("we are here " + button2.textContent);
    return Object.values(questions)[loopNum][4];
};

function getUserInput(t) {
    i++;
    userAnswer = t.name;
    console.log(userAnswer)
    checkAnswer(answer, userAnswer);
    startQuiz();
};

function checkAnswer(ans1, ans2){
    if (ans1 == ans2){
        quizResponse.textContent = "you are correct!";
        correctAnswers++;
    } else {
        quizResponse.textContent = "sorry that is wrong you lose 5 seconds";
        totalSeconds -= 5;
        wrongAnswers++;
    }
}

function startQuiz() {
    answer = setQuestion(i);
    console.log("(2) i is currently " + i);
}

function playTimer() {
    totalSeconds = 60;
    startTimer();


    //create buttons for quiz answer options
    sectionTitle.innerHTML = "<h1>This is a Question</h1>"
    quizBody.innerHTML = "<div class=\"row\"><button class=\"answer\" id=\"opt1\" name = \"1\" onclick=\"getUserInput(this)\"></button></br>"
    + "<button class=\"answer\" id=\"opt2\" name = \"2\" onclick=\"getUserInput(this)\"></button></br>"
    + "<button class=\"answer\" id=\"opt3\" name = \"3\" onclick=\"getUserInput(this)\"></button></br>"
    + "<button class=\"answer\" id=\"opt4\" name = \"4\" onclick=\"getUserInput(this)\"></button></br></div>"

    //button variables
    button1 = document.querySelector("#opt1");
    button2 = document.querySelector("#opt2");
    button3 = document.querySelector("#opt3");
    button4 = document.querySelector("#opt4");

    startQuiz();
    //start quiz
};

function endQuiz(){
    sectionTitle.textContent = "";
    quizBody.innerHTML = "<h1>the quiz has ended</h1><p>You got " + correctAnswers + " answers correct and " + wrongAnswers + " answers wrong </p>";
    quizResponse.textContent = "";
}

startButton.addEventListener("click", playTimer);

