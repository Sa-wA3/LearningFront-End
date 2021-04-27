const quiz = [
  {
    question: 'Question1 :',
    answers: [
      'No.1 :',
      'No.2 :',
      'No.3 :',
      'No.4 :'
    ],
    correct: 'No.3 :'
  }, {
    question: 'Question2 :',
    answers: [
      'No.1 :',
      'No.2 :',
      'No.3 :',
      'No.4 :'
    ],
    correct: 'No.2 :'
  }, {
    question: 'Question3 :',
    answers: [
      'No.1 :',
      'No.2 :',
      'No.3 :',
      'No.4 :'
    ],
    correct: 'No.1 :'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;//上書きしている
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
  
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;

  }
};
setupQuiz(quizIndex);

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('Correct!!!');
    score++;
  }
  else {
    window.alert('Incorrect...');
  }

quizIndex++;

if (quizIndex <quizLength) {
  setupQuiz();
}
else {
  window.alert('Finish！Your score is ' + score + '/' + quizLength);
}

};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}