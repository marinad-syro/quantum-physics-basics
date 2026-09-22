(() => {
  'use strict';

  const modes = {
    wave: {
      title: 'Wave behavior',
      description: 'A particle is described by a wave-like probability pattern. Where the wave is strongest, finding the particle is more likely.'
    },
    particle: {
      title: 'Particle detection',
      description: 'When measured, a quantum object appears as a localized particle at one point rather than spread everywhere at once.'
    },
    superposition: {
      title: 'Superposition',
      description: 'Before measurement, a system can be represented as a combination of possible states. Measurement produces one outcome.'
    },
    uncertainty: {
      title: 'Uncertainty principle',
      description: 'The more precisely we know a particle’s position, the less precisely we can know its momentum, and vice versa.'
    }
  };

  const questions = [
    {
      question: 'What does the wave function describe?',
      answers: ['The probability amplitude of a quantum system', 'The exact path of a particle', 'The speed of light', 'The temperature of a gas'],
      correct: 0,
      explanation: 'The wave function encodes probabilities, not an exact classical trajectory.'
    },
    {
      question: 'What is wave-particle duality?',
      answers: ['Quantum objects can show both wave-like and particle-like behavior', 'All waves are made of particles', 'Particles always move in circles', 'Light can only behave as a particle'],
      correct: 0,
      explanation: 'The behavior we observe depends on how the quantum system is measured.'
    },
    {
      question: 'What is superposition?',
      answers: ['A system being represented by multiple possible states before measurement', 'Two particles merging permanently', 'A force that prevents movement', 'A particle moving at constant speed'],
      correct: 0,
      explanation: 'Superposition allows multiple possibilities to coexist until an observation is made.'
    },
    {
      question: 'What does the uncertainty principle tell us?',
      answers: ['Some pairs of properties cannot both be known exactly at the same time', 'Particles always move randomly', 'Energy cannot be transferred', 'Nothing can be measured'],
      correct: 0,
      explanation: 'Position and momentum are a familiar example of such a pair.'
    },
    {
      question: 'What is quantum entanglement?',
      answers: ['A correlation between quantum systems that can persist across distance', 'A collision between atoms', 'An effect caused by gravity alone', 'Random motion in a gas'],
      correct: 0,
      explanation: 'Entangled systems share a joint quantum state, producing correlated measurement results.'
    }
  ];

  function init() {
    const canvas = document.querySelector('#quantumCanvas');
    const modeTitle = document.querySelector('#modeTitle');
    const modeDescription = document.querySelector('#modeDescription');
    const modeButtons = document.querySelectorAll('.mode-btn');

    let currentMode = 'wave';

    if (canvas) {
      const ctx = canvas.getContext('2d');

      function draw() {
        const width = canvas.width;
        const height = canvas.height;
        const time = performance.now() / 1000;
        const centerY = height / 2;

        ctx.clearRect(0, 0, width, height);
        const background = ctx.createLinearGradient(0, 0, width, height);
        background.addColorStop(0, '#07111f');
        background.addColorStop(1, '#0d1d31');
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = 'rgba(124, 199, 255, .14)';
        ctx.lineWidth = 1;
        for (let y = 30; y < height; y += 30) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        const amplitude = currentMode === 'uncertainty' ? 48 : 30;
        const speed = currentMode === 'wave' ? 3 : 5;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 3) {
          const y = centerY + Math.sin(x * 0.04 + time * speed) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#7cc7ff';
        ctx.lineWidth = 3;
        ctx.shadowColor = 'rgba(124, 199, 255, .7)';
        ctx.shadowBlur = 16;
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (currentMode === 'particle' || currentMode === 'superposition') {
          const x = width / 2 + Math.sin(time * 2.5) * (currentMode === 'superposition' ? 120 : 80);
          const y = centerY + Math.cos(time * 2.6) * 28;
          ctx.beginPath();
          ctx.fillStyle = currentMode === 'superposition' ? '#a78bfa' : '#7ef6d8';
          ctx.arc(x, y, 11, 0, Math.PI * 2);
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = 18;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (currentMode === 'uncertainty') {
          ctx.strokeStyle = 'rgba(255, 209, 102, .75)';
          ctx.lineWidth = 2;
          for (let x = 20; x < width - 20; x += 16) {
            const spread = 38 + Math.sin((x + time * 90) * 0.08) * 20;
            ctx.beginPath();
            ctx.moveTo(x, centerY - spread);
            ctx.lineTo(x, centerY + spread);
            ctx.stroke();
          }
        }

        requestAnimationFrame(draw);
      }

      function selectMode(mode) {
        if (!modes[mode]) return;
        currentMode = mode;
        modeButtons.forEach((button) => button.classList.toggle('active', button.dataset.mode === mode));
        if (modeTitle) modeTitle.textContent = modes[mode].title;
        if (modeDescription) modeDescription.textContent = modes[mode].description;
      }

      modeButtons.forEach((button) => button.addEventListener('click', () => selectMode(button.dataset.mode)));
      selectMode('wave');
      draw();
    }

    const progress = document.querySelector('#quizProgress');
    const questionText = document.querySelector('#questionText');
    const answerChoices = document.querySelector('#answerChoices');
    const feedback = document.querySelector('#feedback');
    const nextButton = document.querySelector('#nextBtn');

    if (!progress || !questionText || !answerChoices || !feedback || !nextButton) return;

    let questionIndex = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      const item = questions[questionIndex];
      answered = false;
      progress.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
      questionText.textContent = item.question;
      answerChoices.innerHTML = '';
      feedback.textContent = '';
      feedback.className = 'feedback hidden';
      nextButton.classList.add('hidden');

      item.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => chooseAnswer(index));
        answerChoices.appendChild(button);
      });
    }

    function chooseAnswer(selectedIndex) {
      if (answered) return;
      answered = true;
      const item = questions[questionIndex];
      const buttons = [...answerChoices.querySelectorAll('.answer-btn')];
      buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === item.correct) button.classList.add('correct');
        if (index === selectedIndex && index !== item.correct) button.classList.add('incorrect');
      });

      if (selectedIndex === item.correct) {
        score += 1;
        feedback.className = 'feedback success';
        feedback.textContent = `Correct! ${item.explanation}`;
      } else {
        feedback.className = 'feedback error';
        feedback.textContent = `Not quite. ${item.explanation}`;
      }
      nextButton.textContent = questionIndex === questions.length - 1 ? 'See results' : 'Next question';
      nextButton.classList.remove('hidden');
    }

    function showResults() {
      progress.textContent = 'Quiz complete';
      questionText.textContent = `Your score: ${score} / ${questions.length}`;
      answerChoices.innerHTML = '';
      feedback.className = score >= 3 ? 'feedback success' : 'feedback error';
      feedback.textContent = score === questions.length
        ? 'Excellent work — you have mastered the basics!'
        : score >= 3
          ? 'Nice job — you understand most of the core ideas.'
          : 'Good start — review the concepts and try again.';
      nextButton.textContent = 'Restart quiz';
      nextButton.classList.remove('hidden');
      nextButton.onclick = () => {
        questionIndex = 0;
        score = 0;
        nextButton.onclick = nextQuestion;
        renderQuestion();
      };
    }

    function nextQuestion() {
      if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        renderQuestion();
      } else {
        showResults();
      }
    }

    nextButton.addEventListener('click', nextQuestion);
    renderQuestion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
