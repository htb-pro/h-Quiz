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
     {
       question: "Quelle est la capitale de l’Afrique du Sud ?",
       options: ["A. Pretoria", "B. Johannesburg", "C. Le Cap", "D. Durban"],
       correctAnswer: "A. Pretoria"
     },
     {
       question: "Quelle est la capitale du Ghana ?",
       options: ["A. Accra", "B. Kumasi", "C. Tamale", "D. Lomé"],
       correctAnswer: "A. Accra"
     },
     {
       question: "Quelle est la capitale du Kenya ?",
       options: ["A. Nairobi", "B. Mombasa", "C. Kisumu", "D. Kampala"],
       correctAnswer: "A. Nairobi"
     },
     {
       question: "Quelle est la capitale de la Côte d'Ivoire ?",
       options: ["A. Abidjan", "B. Yamoussoukro", "C. Bouaké", "D. San Pedro"],
       correctAnswer: "B. Yamoussoukro"
     },
     {
       question: "Quelle est la capitale de la République Démocratique du Congo ?",
       options: ["A. Kinshasa", "B. Brazzaville", "C. Lubumbashi", "D. Kisangani"],
       correctAnswer: "A. Kinshasa"
     }
  ];
const container = document.querySelector(".container");
const quizSection= document.querySelector(".quizSection");//selectionner la zone de l'interrogation
const zoneDemarrage = document.querySelector(".startingAction");
const Question = document.querySelector(".Question");
const numQuestion = document.querySelector(".numQuestion");
const next_btn = document.querySelector("#suivant");
const resultScore= document.querySelector(".score");
const assertions = document.querySelector(".assertions")
const scoreContainer = document.querySelector(".scoreContainer");
var i = 0;
var score=0;
var player="";
zoneDemarrage.addEventListener("click",()=>showQuiz())
function showQuiz(){ //un click sur le boutton de demarrage (p)
  quizSection.style.display = "block";
  zoneDemarrage.style.display = "none";
   if(i==0){
     player=prompt("Entrez votre nom svp") //L'interrogé va entrer son nom qui sera afficher a la fin de l'interrogation
   }
  if(i<quiz.length){ //on va afficher les options de chaque question a l'indice precis sous forme de boutton
    quiz[i].options.forEach(response =>{const button =document.createElement('button');
      button.className = "choix";
      button.innerText = response;
      assertions.appendChild(button)
    });
    Answer()
  }
  numQuestion.innerText = i + "/" + quiz.length +" : ";
  Question.innerText = quiz[i].question;
  resultScore.innerText = "Score "+score +" sur "+ quiz.length;
}
next_btn.addEventListener("click",()=>{
  //au clique du boutton suivant cette fonction va appeler les fonctions ci-dessous
  removedOptions()
  resetOption()
  nextQuestion()

   })
function nextQuestion(){//dans cette fonction 
  i++; //on va incrementer le i
  if(quiz[i] ==quiz.length[quiz.length -1]){ //si c'est la fin il affiche le resultat
    showFinalScore();
    quizSection.style.display = "none";
   
  }
  else{showQuiz();}//sinon on passe a la question suivant
  
}
function removedOptions(){//la fonction va retirer les boutons inserer lors de l'appel de la question
  const removedChild=document.querySelectorAll(".choix");
  removedChild.forEach(C=>assertions.removeChild(C))
}
function Answer(){ //la fonction va traiter la reponse ou l'option choisi par le joueur
   choix = document.querySelectorAll(".choix");
   var correctOption = quiz[i].correctAnswer; //on prends la vrai reponse pour proceder a la comparaison
   choix.forEach(opt=>opt.addEventListener("click",()=>{//on selectionne la valeur de l'option choisi
   var selectedOption= opt.innerText;
   if(correctOption == selectedOption){//on fait la comparaison si l'option choisi est la vrai reponse 
    opt.classList.replace("choix","correct");
    next_btn.style.display = "block";score++}
   else{opt.classList.replace("choix","incorrect");next_btn.style.display = "block";} //sinon
   choix.forEach(choices=>choices.classList.add("disabled"))//une fois que l'option est choisi on ne peut plus faire d'autre selection
}))
}

function resetOption(){
  var prevOption = assertions.firstChild.nextSibling;
  assertions.removeChild(prevOption)
  next_btn.style.display = "none";
}
function showFinalScore(){
  const restartQuiz=document.createElement('button');
  restartQuiz.classList.add("restart");
  restartQuiz.innerText = "Recommencer";
  const finalResult=document.createElement('p');//a la fin de l'interrogation on va creer un element pour l'affichage du score
  finalResult.className = "finalResult";
  finalResult.innerText = player + " vous avez : "+score+" sur "+quiz.length; //on va afficher le resultat
  scoreContainer.style.display = "block";
  scoreContainer.append(finalResult,restartQuiz)
  restartQuiz.addEventListener('click',()=>{  resetResult();i=0;score=0;showQuiz();scoreContainer.style.display = "none";})
}
function resetResult(){//a la fin de du parcour de i dans le quiz on va creer les objects suivants
  if(scoreContainer.firstChild){
    //on va supprimer les elements d'avant 
        scoreContainer.removeChild(scoreContainer.firstChild);
        scoreContainer.removeChild(scoreContainer.firstChild);
      }
   
}


