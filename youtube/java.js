const startButton =document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
startButton.addEventListener('click', startGame)
function startGame(){
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function setNextQuestion(){

}

function selectAnswer(){

}