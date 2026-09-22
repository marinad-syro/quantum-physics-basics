const modeData = {
  wave: {
    title: 'Wave behavior',
    description:
      'A particle is described by a wave-like probability pattern. Where the wave is strongest, finding the particle is more likely.'
  },
  particle: {
    title: 'Particle detection',
    description:
      'In a measurement, the quantum object appears as a localized particle at one point, rather than spread everywhere at once.'
  },
  superposition: {
    title: 'Superposition',
    description:
      'Before a measurement, the system can be thought of as a blend of possible states. Observation chooses one outcome.'
  },
  uncertainty: {
    title: 'Uncertainty principle',
    description:
      'The more sharply we know a particle’s position, the less precisely we can know its momentum, and vice versa.'
  }
};

const canvas = document.getElementById('quantumCanvas');
const ctx = canvas.getContext('2d');
const modeButtons = document.querySelectorAll('.mode-btn');
const modeTitle = document.getElementById('modeTitle');
const modeDescription = document.getElementById('modeDescription');

const quizData = [
  {
    question: 'What does the wave function describe?',
    answers: [
      'The probability amplitude of a quantum system',
      'The exact path of a particle in space',
      'The amount of energy inside a nucleus',
      'The speed of light in a vacuum'
    ],
    correct: 0,
    explanation: 'The wave function encodes probabilities, not exact classical trajectories.'
  },
  {
    question: 'Which idea says that particles can act like waves and like particles?',
    answers: [
      'Wave-particle duality',
      'Newtonian inertia',
      'Thermal equilibrium',
      'Galilean relativity'
    ],
    correct: 0,
    explanation: 'Quantum objects exhibit both wave-like and particle-like behavior depending on the experiment.'
  },
  {
    question: 'What is a superposition?',
    answers: [
      'A system being in multiple possible states at once before measurement',
      'Two particles merging into one object',
      'A force that prevents movement',
      'A particle moving at constant speed'
    ],
    correct: 0,
    explanation: 'Superposition is a core concept in quantum mechanics: many outcomes can coexist as possibilities until measurement.'
  },
  {
    question: 'Which statement best matches the uncertainty principle?',
    answers: [
      'Some pairs of variables cannot both be known exactly at the same time',
      'Particles always move in circles',
      'Energy cannot be transferred',
      'The speed of light changes in a vacuum'
    ],
    correct: 0,
    explanation: 'Position and momentum are a classic example, but the principle applies more broadly.'
  },
  {
    question: 'What is entanglement?',
    answers: [
      'A connection between quantum systems such that measurement results are correlated',
      'A collision between atoms',
      'An effect caused by gravity alone',
      'A random motion in a gas'
    ],
    correct: 0,
    explanation: 'Entangled particles can show correlations stronger than any classical explanation allows.'
  }
];

let currentQuizIndex = 0;
let selectedAnswerIndex = null;
let score = 0;

function setMode(mode) {
  const config = modeData[mode];
  modeTitle.textContent = config.title;
  modeDescription.textContent = config.description;

  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
}

function drawWavePattern(mode) {
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, '#07111f');
  background.addColorStop(1, '#0d1d31');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'rgba(124, 199, 255, 0.2)';
  ctx.lineWidth = 1;
  for (let y = 30; y < height; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  const time = performance.now() / 1000;
  const midY = height / 2;

  ctx.beginPath();
  for (let x = 0; x <= width; x += 3) {
    const y = midY + Math.sin(x * 0.04 + time * (mode === 'wave' ? 3 : 5)) * (mode === 'uncertainty' ? 46 : 30);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(124, 199, 255, 0.9)';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = 'rgba(124, 199, 255, 0.7)';
  ctx.shadowBlur = 18;
  ctx.stroke();
  ctx.shadowBlur = 0;

  if (mode === 'particle' || mode === 'superposition') {
    const particleX = width * 0.5 + Math.sin(time * 2.5) * (mode === 'superposition' ? 120 : 80);
    const particleY = midY + Math.cos(time * 2.6) * 30;
    ctx.beginPath();
    ctx.fillStyle = mode === 'superposition' ? '#a78bfa' : '#7ef6d8';
    ctx.arc(particleX, particleY, mode === 'superposition' ? 10 : 12, 0, Math.PI * 2);
    ctx.fill();

    if (mode === 'superposition') {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(167, 139, 250, 0.2)';
      ctx.arc(width * 0.5 - 120, midY, 55, 0, Math.PI * 2);
      ctx.arc(width * 0.5 + 120, midY, 55, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (mode === 'uncertainty') {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255, 209, 102, 0.9)';
    for (let x = 20; x < width - 20; x += 16) {
      const spread = 38 + Math.sin((x + time * 90) * 0.08) * 22;
      ctx.moveTo(x, midY - spread);
      ctx.lineTo(x, midY + spread);
    }
    ctx.stroke();
  }
}

function animationLoop(mode = 'wave') {
  drawWavePattern(mode);
  requestAnimationFrame(() => animationLoop(mode));
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setMode(button.dataset.mode);
    animationLoop(button.dataset.mode);
  });
});

setMode('wave');
animationLoop('wave');

function renderQuestion() {
  const currentQuestion = quizData[currentQuizIndex];
  const questionText = document.getElementById('questionText');
  const answerChoices = document.getElementById('answerChoices');
  const quizProgress = document.getElementById('quizProgress');
  const nextBtn = document.getElementById('nextBtn');
  const feedback = document.getElementById('feedback');

  selectedAnswerIndex = null;
  questionText.textContent = currentQuestion.question;
  quizProgress.textContent = `Question ${currentQuizIndex + 1} of ${quizData.length}`;
  answerChoices.innerHTML = '';
  feedback.classList.add('hidden');
  feedback.classList.remove('success', 'error');
  nextBtn.classList.add('hidden');

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.textContent = answer;
    button.addEventListener('click', () => handleAnswerClick(index, button));
    answerChoices.appendChild(button);
  });
}

function handleAnswerClick(index, button) {
  if (selectedAnswerIndex !== null) return;

  selectedAnswerIndex = index;
  const correctIndex = quizData[currentQuizIndex].correct;
  const buttons = [...document.querySelectorAll('.answer-btn')];
  const feedback = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextBtn');

  buttons.forEach((btn, btnIndex) => {
    btn.disabled = true;
    if (btnIndex === correctIndex) {
      btn.classList.add('correct');
    }
    if (btnIndex === index && index !== correctIndex) {
      btn.classList.add('incorrect');
    }
  });

  if (index === correctIndex) {
    score += 1;
    feedback.textContent = `Correct! ${quizData[currentQuizIndex].explanation}`;
    feedback.classList.add('success');
  } else {
    feedback.textContent = `Not quite. ${quizData[currentQuizIndex].explanation}`;
    feedback.classList.add('error');
  }

  feedback.classList.remove('hidden');
  nextBtn.textContent = currentQuizIndex === quizData.length - 1 ? 'See results' : 'Next question';
  nextBtn.classList.remove('hidden');
}

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => {
  currentQuizIndex += 1;

  if (currentQuizIndex < quizData.length) {
    renderQuestion();
    return;
  }

  const questionText = document.getElementById('questionText');
  const answerChoices = document.getElementById('answerChoices');
  const quizProgress = document.getElementById('quizProgress');
  const feedback = document.getElementById('feedback');

  quizProgress.textContent = 'Quiz complete';
  questionText.textContent = `Your score: ${score} / ${quizData.length}`;
  answerChoices.innerHTML = '';
  feedback.textContent = score === quizData.length
    ? 'Excellent work — you’ve got the basics down.'
    : score >= 3
      ? 'Nice job. You understand most of the core ideas.'
      : 'Good start. Review the concepts and try again soon.';
  feedback.classList.remove('hidden');
  feedback.classList.add(score >= 3 ? 'success' : 'error');
  nextBtn.textContent = 'Restart quiz';
  nextBtn.classList.remove('hidden');
  nextBtn.onclick = () => {
    currentQuizIndex = 0;
    score = 0;
    renderQuestion();
    nextBtn.onclick = null;
  };
});

renderQuestion();
