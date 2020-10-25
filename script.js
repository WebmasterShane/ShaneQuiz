var mainQuestion = document.getElementById("question")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var choice = document.getElementById("button")
var correctOrNot= document.getElementById("correct")
var startButton = document.getElementById("start-btn")
var buttons = document.getElementById("buttons")
var closing = document.querySelector("closing")
var score = 0
var currentQuestionIndex = 0
var time = 75
var questions = [

    {
        question: "Who created HTML?",
        answers: ["Time Berners-Lee", "Steve Jobs", "Rober E. Kahn","Ben Franklin"],
        correct: ["Time Berners-Lee",]
    

    },
    {
       question: "Who created CSS?",
       answers: ["Fusajiro Yamauchi", "Bill Gates", "Hakon Qium Lie", "Donald Trump"],
       correct: "Hakon Qium Lie"
     
    },
    {
        question: "Who created JavaScript?",
        answers: ["Abraham Lincoln", "Brendan Eich","Jeff Kaplan", "Shane Webber"],
        correct: "Brendan Eich"
         
    },
    {
        question: "What is the meaning of life?",
        answers:["to love", "to travel", "to be happy","42"],
        correct: "42"
        

    },]



   startButton.addEventListener("click", startGame)

   function startGame(){
       console.log("Started")
       startButton.classList.add("hide")
       mainQuestion.classList.remove("hide")
       buttons.classList.remove("hide")
      
       timer = setInterval(function(){
           time--;
           document.querySelector(".timer").textContent = time; 
       },1000);
       if (timer === 0){
           endquiz()
       }
       //console.log(currentQuestionIndex)
       startQuestion()

    };    
   

   function startQuestion(){
       mainQuestion.textContent = questions[currentQuestionIndex].question
       btn1.textContent = questions[currentQuestionIndex].answers[0]
       btn2.textContent = questions[currentQuestionIndex].answers[1]
       btn3.textContent = questions[currentQuestionIndex].answers[2]
       btn4.textContent = questions[currentQuestionIndex].answers[3]

    
   }
    buttons.addEventListener("click", 
           function setNextQuestion(event){
                              //console.log(currentQuestionIndex);
                                console.log(event.target.textContent)
                
              // console.log(questions[currentQuestionIndex].correct)
               function processAnswer(){
                    if(currentQuestionIndex => questions.length){
                        endQuiz()}
                        if (event.target.textContent === questions[currentQuestionIndex].correct){
                                correctOrNot.innerText = "Correct"
                                score++;
                                
                            }
                                
                            else { 
                                correctOrNot.innerText = "Wrong"
                                time = time - 10
                            }
                           
                            //console.log(currentQuestionIndex, questions[currentQuestionIndex].correct)
                          
                        }
                        //console.log(score)
                        processAnswer()
                        currentQuestionIndex++;
                        console.log(score)
                        startQuestion();  
                    })
  


            

    function endQuiz(){
     //   closing.classList.remove("hide")


    }
          



   


