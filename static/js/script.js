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
     category:"C-Programming",
    quizWrap:[
        {
        question:"Identify the C compiler of UNIX:",
        options:["gcc","cc","vcc","vc++"],
        answer:1,
        description:"‘cc’ full form is C Compiler and is the compiler for UNIX. gcc is GNU C compiler for linux. Borland and vc++ (Microsoft visual c++) for windows."
        },
        {
        question:"Which header file supports the functions - malloc() and calloc()?",
        options:["stdlib.h","memory.h","math.h","stdio.h"],
         answer:0,
         description:"void *malloc(size_t size) : Allocates the requested memory and returns a pointer to it,void *calloc(size_t nitems, size_t size): Allocates the requested memory and returns a pointer to it."
        },
        {
         question:"Choose the function that is most appropriate for reading in a multi-word string?",
         options:["strnset()","scanf()","strchr()","gets()"],
         answer:3,
         description:"gets (); = Collects a string of characters terminated by a new line from the standard input stream stdin"
        },
        {
         question:"C programs are converted into machine language with the help of",
         options:["An Editor","A compiler", "An operating system", "None of these"],
         answer:1,
         description:"A compiler is a system software that converts high level language into machine level language."
        },
        {
         question:"C was primarily developed as",
         options:["System programming language","General purpose language","Data Processing language","None of the above"],
         answer:0,
        },
        {
            question:"Which of the following is not a reserved keyword for C?",
            options:["auto","case","main","register"],
            answer:2,
           },
           {
            question:"Which one of the following is not a valid identifier?",
            options:["_char","1char","char_char","char1"],
            answer:1,
            description:"The first character must be a letter or special symbol underscore( _ )."
           },
           {
            question:"Which one of the following is not a correct variable type?",
            options:["float","real","double","char"],
            answer:1,
           },
           {
            question:"The statement int **a;",
            options:["is illegal","is legal but meaningless","is syntactically and semantically correct","None of these"],
            answer:2,
           },
           {
            question:"C preprocessor",
            options:["Takes care of conditional compilation","Take cares of macros","Acts before compilation","All of these"],
            answer:3,
           },
           
    ]
},
{
    category:"Java",
   quizWrap:[
       {
       question:"In Java a thread can be created by.......",
       options:["Extending the thread class","Implementing Runnable interface","Both of the above","None of these"],
       answer:2,
       },
       {
       question:"Which of the following declares an abstract method in an abstract Java class?",
       options:["public abstract method();","public abstract void method();","public void abstract Method();","public abstract void method() {}"],
        answer:1,
       },
       {
        question:"The class at the top of exception class hierarchy is.......",
        options:["ArithmeticException","Throwable","Object","Exception"],
        answer:1,
       },
       {
        question:"In which of the following package Exception class exist?",
        options:["java.util","java.file","java.io","java.lang"],
        answer:3,
       },
       {
        question:"Exception generated in try block is caught in ....block?",
        options:["catch","throw","throws","finally"],
        answer:0,
       },
       {
        question:"Which keyword is used to explicitly throw an exception?",
        options:["try","throwing","catch","throw"],
        answer:3,
       },
       {
        question:"toString() method is defined in",
        options:["java.lang.String","java.lang.Object","java.lang.util","None of these"],
        answer:1,
       },
       {
        question:"The string method compareTo() returns",
        options:["1","-1","an int value","0"],
        answer:2,
       },
       {
        question:"What will be the return type of a method that not returns any value?",
        options:["void","int","double","None of these"],
        answer:0,
       },
       {
        question:"In Java arrays are",
        options:["objects","object references","primitive data type","None of these"],
        answer:0,
        description:"In java an array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed."
       },
   ]
},
{
    category:"DBMS",
   quizWrap:[
       {
       question:"A collection of related data.",
       options:["Information","Valuable Information","Database","Metadata"],
       answer:2,
       description:"Database is the collection of related data and its metadata organized in a structured format. It is designed for optimized information management."
       },
       {
       question:"DBMS is a software.",
       options:["true","false"],
        answer:0,
        description:"The statement is true. DBMS stands for Database Management System. It enables easy creation and access of the database."
       },
       {
        question:"DBMS manages the interaction between __________ and database.",
        options:["Users","Clients","End Users","Stake Holders"],
        answer:2,
        description:"DBMS manages the interaction between the end users and the database. End users are the final users that interact with the database."
       },
       {
        question:"Which of the following is not involved in DBMS?",
        options:["End Users","Data","Application Request","HTML"],
        answer:3,
        description:"HTML isn’t involved in Database Management System. Other things like the data and application request are a part of the DBMS."
       },
       {
        question:" Database is generally __________",
        options:["System-centered","User-centered","Company-centered","Data-centered"],
        answer:1,
        description:"Database is user-centered. The perspective is that the user is always right. If there is a problem with the use of the system, the system is the problem, not the user."
       },
       {
        question:"A characteristic of an entity.",
        options:["Relation","Attribute","Parameter","Constraint"],
        answer:1,
        description:"An attribute is a characteristic of an entity. The association among the entities is described by the relationship."
       },
       {
        question:"The restrictions placed on the data.",
        options:["Relation","Attribute","Parameter","Constraint"],
        answer:3,
        description:"Constraint is a restriction that is placed on the data. Attribute is the characteristic and the relation describes the association."
       },
       {
        question:" IMS stands for?",
        options:["Information Mastering System","Instruction Management System","Instruction Manipulating System","Information Management System"],
        answer:3,
        description:"IMS stands for Information Management System. It is developed to manage large amounts of data for complex projects."
       },
       {
        question:"A model developed by Hammer and Mc Leod in 1981.",
        options:["SDM","OODBM","DDM","RDM"],
        answer:0,
        description:"SDM stands for Semantic Data Model. It models both data and their relationships in a single structure."
       },
       {
        question:"Object=_________+relationships.",
        options:["Relation","Attribute","Parameter","Constraint"],
        answer:2,
        description:"The answer is entity. It is a part of OODBM (Object-Oriented Database Model). It maintains the advantages of ER-model but adds more features."
       },
   ]
},
{
    category:"Operating Systems",
   quizWrap:[
       {
       question:"To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
       options:["8","1","16","0"],
       answer:1,
       },
       {
       question:"Process is",
       options:["program in High level language kept on disk","contents of main memory","a program in execution","a job in secondary memory"],
        answer:2,
       },
       {
        question:"The LRU algorithm",
        options:["pages out pages that have been used recently","pages out pages that have not been used recently","pages out pages that have been least used recently","pages out the first page in a given area"],
        answer:3,
       },
       {
        question:"The strategy of allowing processes that are logically runnable to be temporarily suspended is called",
        options:["preemptive scheduling","non preemptive scheduling","shortest job first","first come first served"],
        answer:0,
       },
       {
        question:"Which of the following systems software does the job of merging the records from two files into one?",
        options:["Security software","Utility program","Networking software","Documentation system"],
        answer:1,
       },
       {
        question:"Fork is",
        options:["the dispatching of a task","the creation of a new job","the creation of a new process","increasing the priority of a task"],
        answer:2,
       },
       {
        question:"Supervisor state is",
        options:["never used","entered by programs when they enter the processor","required to perform any I/O","only allowed to the operating system"],
        answer:3,
       },
       {
        question:"The initial value of the semaphore that allows only one of the many processes to enter their critical sections, is",
        options:["8","1","16","0"],
        answer:1,
       },
       {
        question:"An algorithm is best described as",
        options:["A computer language","A step by step procedure for solving a problem","A branch of mathematics","All of the above"],
        answer:1,
       },
       {
        question:"In which of the storage placement strategies a program is placed in the largest available hole in the main memory?",
        options:["best fit","first fit","worst fit","buddy"],
        answer:2,
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