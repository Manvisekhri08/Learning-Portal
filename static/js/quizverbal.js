const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const quizHomeBox = document.querySelector(".quiz-home-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
//const startQuizBtn = document.querySelector(".start-quiz-btn");
const categoryBox = document.querySelector(".category-box");
const categoryText = document.querySelector(".category-text");

let attempt=0;
let questionIndex=0;
let number=0;
let score=0;
let myArray=[];
let interval;
let categoryIndex;

myApp=[
    {
         category:"Antonyms",
        quizWrap:[
            {
            question:"Choose the word which is the exact OPPOSITE of the word ENORMOUS.",
            options:["Soft","Average","Tiny","Weak"],
            answer:2,
            
            },
            {
            question:"Choose the word which is the exact OPPOSITE of the word COMMISSIONED.",
            options:["Started","Closed","Finished","Terminated"],
             answer:3,
            },
            {
             question:"Choose the word which is the exact OPPOSITE of the word ARTIFICIAL.",
             options:["Red","Natural","Truthful","Solid"],
             answer:2,
            },
            {
             question:"Choose the word which is the exact OPPOSITE of the word EXODUS.",
             options:["Influx","Home-coming","Return","Restoration"],
             answer:0,
            },
            {
             question:"Choose the word which is the exact OPPOSITE of the word RELINQUISH",
             options:["Abdicate","Renounce","Possess","Deny"],
             answer:2,
            },
            {
                question:"Choose the word which is the exact OPPOSITE of the word EXPAND",
                options:["Convert","Condense","Congest","Conclude"],
                answer:1,
               },
               {
                question:"Choose the word which is the exact OPPOSITE of the word MORTAL",
                options:["Divine","Immortal","Spiritual","Eternal"],
                answer:1,
               },
               {
                question:"Choose the word which is the exact OPPOSITE of the word QUIESCENT",
                options:["ACTIVE","Dormant","Weak","Unconcerned"],
                answer:0,
               },
               {
                question:"Choose the word which is the exact OPPOSITE of the word EVASIVE",
                options:["Free","Honest","Liberal","Frank"],
                answer:1,
               },
               {
                question:"Choose the word which is the exact OPPOSITE of the word GREGARIOUS",
                options:["Antisocial","Glorious","Horrendous","similar"],
                answer:0,
               },
               
        ]
    },
    {
        category:"Synonyms",
       quizWrap:[
           {
           question:"Choose the word which best expresses the meaning of the word CORPULENT.",
           options:["Lean","Gaunt","Emaciated","Obese"],
           answer:3,
           },
           {
           question:"Choose the word which best expresses the meaning of the word BRIEF.",
           options:["Limited","Small","Little","Short"],
            answer:3,
           },
           {
            question:"Choose the word which best expresses the meaning of the word EMBEZZLE.",
            options:["Misappropriate","Balance","Remunerate","Clear"],
            answer:0,
           },
           {
            question:"Choose the word which best expresses the meaning of the word VENT.",
            options:["Opening","Stodge","End","Past tense of go"],
            answer:0,
           },
           {
            question:"Choose the word which best expresses the meaning of the word AUGUST",
            options:["Common","Ridiculous","Dignified","Petty"],
            answer:2,
           },
           {
            question:"Choose the word which best expresses the meaning of the word CANNY",
            options:["Obstinate","Handsome","Clever","Stout"],
            answer:2,
           },
           {
            question:"Choose the word which best expresses the meaning of the word ALERT",
            options:["Energetic","Observant","Intelligent","Watchful"],
            answer:3,
           },
           {
            question:"Choose the word which best expresses the meaning of the word INEBRIATE",
            options:["Dreamy","Stupefied","Unsteady","Drunken"],
            answer:3,
           },
           {
            question:"Choose the word which best expresses the meaning of the word STERILE",
            options:["Barren","Arid","Childless","Dry"],
            answer:0,
           },
           {
            question:"Choose the word which best expresses the meaning of the word ABJECT",
            options:["Challenge","Miserable","Deny","Disobey"],
            answer:1,
           },
       ]
    },
    {
        category:"Selecting Words",
       quizWrap:[
           {
           question:"Fate smiles ...... those who untiringly grapple with stark realities of life.",
           options:["with","over","on","round"],
           answer:2,
           },
           {
           question:"The miser gazed ...... at the pile of gold coins in front of him.",
           options:["avidly","admiringly","thoughtfully","earnestly"],
            answer:0,
           },
           {
            question:"Catching the earlier train will give us the ...... to do some shopping.",
            options:[ "chance","luck","possibility","occasion"],
            answer:0,
           },
           {
            question:"I saw a ...... of cows in the field.",
            options:["group","herd","swarm","flock"],
            answer:1,
           },
           {
            question:"The grapes are now ...... enough to be picked.",
            options:["ready","mature","ripe","advanced"],
            answer:2,
           },
           {
            question:"Success in this examination depends ...... hard work alone.",
            options:["at","over","for","on"],
            answer:3,
           },
           {
            question:"My uncle decided to take ...... and my sister to the market.",
            options:["I","Me","Mine","Myself"],
            answer:2,
           },
           {
            question:" If you smuggle goods into the country, they may be ...... by the customs authority.",
            options:["possessed,punished,confiscated,fined"],
            answer:2,
           },
           {
            question:"Man does not live by ...... alone.",
            options:["food,bread,meals,diet"],
            answer:1,
           },
           {
            question:" Rohan and Rohit are twin brothers, but they do not look ......",
            options:["unique,different,likely,alike"],
            answer:3,
           },
       ]
    },
    {
        category:"Verbal Analogies",
       quizWrap:[
           {
           question:"DIVA:OPERA",
           options:["producer:theatre","director:drama","conductor:bus","thespian:play"],
           answer:3,
           },
           {
           question:"GRAIN:SALT",
           options:["shard:pottery","shred:wood","blades:grass","chip:glass"],
            answer:3,
           },
           {
            question:"THRUST:SPEAR",
            options:["mangle:iron","scabbard:sword","bow:arrow","fence:epee"],
            answer:3,
           },
           {
            question:"LIGHT:BLIND",
            options:["speech:dumb","language:deaf","tongue:sound","voice:vibration"],
            answer:0,
           },
           {
            question:"TEN:DECIMAL",
            options:["seven:septet","four:quartet","two:binary","five:quince"],
            answer:2,
           },
           {
            question:"MUNDANE:SPIRITUAL",
            options:["common:ghostly","worldly:unworldly","routine:novel","secular:clerical"],
            answer:2,
           },
           {
            question:"GRAVITY:PULL",
            options:["iron:metal","north pole:directions","magnetism:attraction","dust:desert"],
            answer:2,
           },
           {
            question:"FILTER:WATER",
            options:["curtail:activity","expunge:book","edit:text","censor:play"],
            answer:3,
           },
           {
            question:"HOPE:ASPIRES",
            options:["ove:elevates","film:flam","fib:lie","fake:ordinary"],
            answer:2,
           },
           {
            question:"CORPOREAL:SPIRITUAL",
            options:["mesa:plateau","moron:savant","foreigner:immigrant","pedagogue:teacher"],
            answer:1,
           },
       ]
    }
                ]
function createCategory(){
    //console.log(myApp[0].category);
    for(let i=0; i<myApp.length; i++){
        const categoryList=document.createElement("div");
        categoryList.innerHTML=myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectedCategory(this)");
        categoryBox.appendChild(categoryList);
    }
}  

function selectedCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
    //console.log(categoryIndex);
    categoryText.innerHTML=myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}

function load(){
    number++;
    questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + "/" + myApp[categoryIndex].quizWrap.length;
}

function createOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++)
    {
      const option=document.createElement("div");
      option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i];
      option.classList.add("option");
      option.id=i;
      option.style.animationDelay=animationDelay + "s";
      animationDelay=animationDelay+0.2;
      option.setAttribute("onclick","check(this)");
      optionBox.appendChild(option);
    }
}

function check(ele){
    const id=ele.id;
    if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
        ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();

    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    let hitDuplicate=0;
    //console.log(randomNumber);
    //console.log(myArray.length);
    if(myArray.length ==0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
               //console.log("duplicate random Number:"+ randomNumber);
               hitDuplicate=1;
               //console.log("duplicate found:"+randomNumber);
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray);
    load();
}

function timeIsUp(){
    showTimeUpText();
    for(let i=0; i<optionBox.children.length; i++){
        if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
            optionBox.children[i].classList.add("show-correct");
        }
    }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
}

function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
            remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered");
    }
}

function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
    answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;
    }
}

function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}

function showTimeUpText(){
    timeUpText.classList.add("show");
}

function hideTimeUpText(){
    timeUpText.classList.remove("show");
}

function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}

function resetQuiz(){
    attempt=0;
    //questionIndex=0;
    score=0;
    number=0;
    myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}

function quizResult(){
    var result;
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage = (score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
    document.getElementById("correc").value = score;
    document.getElementById("total").value = myApp[categoryIndex].quizWrap.length;
}

seeResultBtn.addEventListener("click",()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
   quizOverBox.classList.add("show");
   quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
})



/*startQuizBtn.addEventListener("click",()=>{
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
})*/

window.onload=()=>{
   createCategory();
}