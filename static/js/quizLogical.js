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
     category:"Number Series",
    quizWrap:[
        {
        question:"Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options:["(1/3)","(1/8)","(2/8)","(1/16)"],
        answer:1,
        },
        {
        question:"Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options:["7","10","12","13"],
         answer:1,
        },
        {
         question:"Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
         options:["20","22","23","26"],
         answer:1,
        },
        {
         question:"Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
         options:["22","24", "25", "26"],
         answer:2,
        },
        {
         question:"Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
         options:["12","14","27","53"],
         answer:1,
        },
        {
            question:"Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?",
            options:["14","15","21","23"],
            answer:1,
           },
           {
            question:"Look at this series: 58, 52, 46, 40, 34, ... What number should come next?",
            options:["26","28","30","32"],
            answer:1,
           },
           {
            question:"Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?",
            options:["7","10","14","15"],
            answer:3,
           },
           {
            question:"Look at this series: 8, 22, 8, 28, 8, ... What number should come next?",
            options:["9","29"," 32","34"],
            answer:3,
           },
           {
            question:"Look at this series: 31, 29, 24, 22, 17, ... What number should come next?",
            options:["15","14","13","12"],
            answer:0,
           },
           
    ]
},
{
    category:"Letter and Symbol Series",
   quizWrap:[
       {
       question:"SCD, TEF, UGH, ____, WKL",
       options:["CMN","UJI","VIJ","IJT"],
       answer:2,
       },
       {
       question:"B2CD, _____, BCD4, B5CD, BC6D",
       options:["B2C2D","BC3D","B2C3D","BCD7"],
        answer:1,
       },
       {
        question:"FAG, GAF, HAI, IAH, ____",
        options:["JAK","HAL","HAK","JAI"],
        answer:0,
       },
       {
        question:"ELFA, GLHA, ILJA, _____, MLNA",
        options:["OLPA","KLMA","LLMA","KLLA"],
        answer:3,
       },
       {
        question:"CMM, EOO, GQQ, _____, KUU",
        options:[" GRR","GSS","ISS","ITT"],
        answer:2,
       },
       {
        question:"ZA5, Y4B, XC6, W3D, _____",
        options:["E7V","V2E","VE5","VE7"],
        answer:3,
       },
       {
        question:"QPO, NML, KJI, _____, EDC",
        options:["HGF","CAB","JKL","GHI"],
        answer:0,
       },
       {
        question:"JAK, KBL, LCM, MDN, _____",
        options:["OEP","NEO","MEN","PFQ"],
        answer:1,
       },
       {
        question:"JAK, KBL, LCM, MDN, _____",
        options:["JKJ","HJH","IJI","JHJ"],
        answer:0,
       },
       {
        question:"P5QR, P4QS, P3QT, _____, P1QV",
        options:["PQW","PQV2","P2QU","PQ3U"],
        answer:2,
       },
   ]
},
{
    category:"Analogies",
   quizWrap:[
       {
       question:"Odometer is to mileage as compass is to",
       options:["Speed","Hiking","Needle","Direction"],
       answer:3,
       },
       {
       question:"Marathon is to race as hibernation is to",
       options:["winter","bear","dream","sleep"],
        answer:3,
       },
       {
        question:"Window is to pane as book is to",
        options:["novel","glass","cover","page"],
        answer:3,
       },
       {
        question:"Cup is to coffee as bowl is to",
        options:["dish","spoon","soup","food"],
        answer:2,
       },
       {
        question:"Yard is to inch as quart is to",
        options:["gallon","ounce","milk","liquid"],
        answer:1,
       },
       {
        question:"Elated is to despondent as enlightened is to",
        options:["aware","ignorant","miserable","tolerant"],
        answer:1,
       },
       {
        question:"Optimist is to cheerful as pessimist is to",
        options:["gloomy","mean","petty","helpful"],
        answer:0,
       },
       {
        question:"Reptile is to lizard as flower is to",
        options:["petal","stem","daisy","alligator"],
        answer:2,
       },
       {
        question:"Play is to actor as concert is to",
        options:["symphony","musician","piano","percussion"],
        answer:1,
       },
       {
        question:"Sponge is to porous as rubber is to",
        options:["massive","solid","elastic","inflexible"],
        answer:2,
       },
   ]
},
{
    category:"Directions",
   quizWrap:[
       {
       question:"One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
       options:["East","West","North","South"],
       answer:2,
       },
       {
       question:"Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
         options:["South","North","South-East","None of these",],
        answer:3,
       },
       {
        question:"If South-East becomes North, North-East becomes West and so on. What will West become?",
       options:["North-East","North-West","South-East","South-West"],
        answer:2,
       },
       {
        question:"A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
        options:["West","South","North-East","South-West"],
        answer:3,
       },
       {
        question:"Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M. ?",
         options:["West","South","North","South-East"],
        answer:0,
       },
       {
        question:"Rasik walked 20 m towards north. Then he turned right and walks 30 m. Then he turns right and walks 35 m. Then he turns left and walks 15 m. Finally he turns left and walks 15 m. In which direction and how many metres is he from the starting position?",
        options:["15 m West","30 m East","30 m West","45 m East"],
        answer:3,
       },
       {
        question:"Two cars start from the opposite places of a main road, 150 km apart. First car runs for 25 km and takes a right turn and then runs 15 km. It then turns left and then runs for another 25 km and then takes the direction back to reach the main road. In the mean time, due to minor break down the other car has run only 35 km along the main road. What would be the distance between two cars at this point?",
        options:["65 km","75 km","80 km","85 km"],
        answer:1,
       },
       {
        question:"Starting from the point X, Jayant walked 15 m towards west. He turned left and walked 20 m. He then turned left and walked 15 m. After this he turned to his right and walked 12 m. How far and in which directions is now Jayant from X?",
        options:["32 m, South","47 m, East","42 m, North","27 m, South"],
        answer:2,
       },
       {
        question:"One evening before sunset Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
          options:["West","South","North","South-East"],
        answer:1,
       },
       {
        question:"A boy rode his bicycle Northward, then turned left and rode 1 km and again turned left and rode 2 km. He found himself 1 km west of his starting point. How far did he ride northward initially?",
        options:["1 km","2 km","3 km","5 km"],
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
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage = (score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
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