const quiz = [
    {
      question: "Quelle est la capitale du Sénégal ?",
      options: ["A. Abidjan", "B. Dakar", "C. Bamako", "D. Conakry"],
      correctAnswer: "B. Dakar"
    },
    {
      question: "Quelle est la capitale de l’Égypte ?",
      options: ["A. Khartoum", "B. Tripoli", "C. Le Caire", "D. Alexandrie"],
      correctAnswer: "C. Le Caire"
    },
    {
      question: "Quelle est la capitale du Cameroun ?",
      options: ["A. Yaoundé", "B. Douala", "C. Libreville", "D. Brazzaville"],
      correctAnswer: "A. Yaoundé"
    },
    {
      question: "Quelle est la capitale du Maroc ?",
      options: ["A. Marrakech", "B. Casablanca", "C. Rabat", "D. Fès"],
      correctAnswer: "C. Rabat"
    },
    {
      question: "Quelle est la capitale du Nigéria ?",
      options: ["A. Lagos", "B. Abuja", "C. Kano", "D. Ibadan"],
      correctAnswer: "B. Abuja"
    },
    // {
    //   question: "Quelle est la capitale de l’Afrique du Sud ?",
    //   options: ["A. Pretoria", "B. Johannesburg", "C. Le Cap", "D. Durban"],
    //   correctAnswer: "A. Pretoria"
    // },
    // {
    //   question: "Quelle est la capitale du Ghana ?",
    //   options: ["A. Accra", "B. Kumasi", "C. Tamale", "D. Lomé"],
    //   correctAnswer: "A. Accra"
    // },
    // {
    //   question: "Quelle est la capitale du Kenya ?",
    //   options: ["A. Nairobi", "B. Mombasa", "C. Kisumu", "D. Kampala"],
    //   correctAnswer: "A. Nairobi"
    // },
    // {
    //   question: "Quelle est la capitale de la Côte d'Ivoire ?",
    //   options: ["A. Abidjan", "B. Yamoussoukro", "C. Bouaké", "D. San Pedro"],
    //   correctAnswer: "B. Yamoussoukro"
    // },
    // {
    //   question: "Quelle est la capitale de la République Démocratique du Congo ?",
    //   options: ["A. Kinshasa", "B. Brazzaville", "C. Lubumbashi", "D. Kisangani"],
    //   correctAnswer: "A. Kinshasa"
    // }
  ];
const container = document.querySelector(".container");
const quizSection= document.querySelector(".quizSection");//selectionner la zone de l'interrogation
const zoneDemarrage = document.querySelector(".startingAction");
const Question = document.querySelector(".Question");
const numQuestion = document.querySelector(".numQuestion");
const next_btn = document.querySelector("#suivant");
const resultScore= document.querySelector(".score");
//const choix=document.querySelectorAll('.assertions > button')
const assertions = document.querySelector(".assertions")
var i = 0;
var score=0;

zoneDemarrage.addEventListener("click",()=>showQuiz())
function showQuiz(){
  quizSection.style.display = "block";
  zoneDemarrage.style.display = "none";
  quiz[i].options.forEach(response =>{const button =document.createElement('button');
    button.className = "choix";
    button.innerText = response;
    assertions.appendChild(button)
  })
  numQuestion.innerText = 'Q-'+ i + " / " + quiz.length +" ";
  Question.innerText = quiz[i].question;
  
  Answer()
  
}

next_btn.addEventListener("click",()=>{
  i++
  removedOptions()
  showQuiz()
  resetOption()
  //console.log(i)
  resultScore.innerText = "Score "+score +" sur "+ quiz.length;
  if(i>=quiz.length){
    next_btn.addEventListener("click",()=>console.log("End"),resetOption());
  }
 })
function showFinalScore(){
  const restartPlaying=document.createElement('button');
  restartPlaying.classList.add("restart");
  restartPlaying.innerText = "Recommencer";
  const finalResult=document.createElement('p');//a la fin de l'interrogation on va creer un element pour l'affichage du score
  finalResult.className = "finalResult";
  finalResult.innerText = score; //on va afficher le resultat
  container.classList.replace("container","scoreContainer");
  scoreContainer.append(restartPlaying,finalResult);
}
function removedOptions(){
  const removedChild=document.querySelectorAll(".choix");
  removedChild.forEach(C=>assertions.removeChild(C))
}
function Answer(){
   choix = document.querySelectorAll(".choix");
   var correctOption = quiz[i].correctAnswer;
   choix.forEach(opt=>opt.addEventListener("click",()=>{
   if(i==quiz.length-1){correctOption = quiz[quiz.length -1].correctAnswer;quiz[quiz.length] = showFinalScore}
   var selectedOption= opt.innerText;
   if(correctOption == selectedOption){opt.classList.replace("choix","correct");next_btn.style.display = "block";score++}
   else{opt.classList.replace("choix","incorrect");next_btn.style.display = "block";}
   choix.forEach(choices=>choices.classList.add("disabled"))
}))
}

function resetOption(){
  var prevOption = assertions.firstChild.nextSibling;
  assertions.removeChild(prevOption)
  next_btn.style.display = "none";
}



