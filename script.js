:root {
  --bg: #07111f;
  --bg-soft: #0d1d31;
  --panel: rgba(16, 30, 49, 0.8);
  --panel-strong: rgba(18, 38, 63, 0.92);
  --line: rgba(132, 168, 255, 0.22);
  --text: #eaf4ff;
  --muted: #b5c9df;
  --primary: #7cc7ff;
  --primary-strong: #53a9ff;
  --secondary: #a78bfa;
  --accent: #7ef6d8;
  --warning: #ffd166;
  --danger: #ff7b93;
  --shadow: rgba(8, 15, 37, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(92, 164, 255, 0.18), transparent 35%),
    linear-gradient(180deg, var(--bg), #0a1220 45%, #0f1830 100%);
  color: var(--text);
}

img,
canvas {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding-bottom: 64px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 16px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgba(7, 17, 31, 0.55);
  z-index: 40;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #031220;
  font-weight: 800;
  box-shadow: 0 14px 24px rgba(83, 169, 255, 0.35);
}

.nav {
  display: flex;
  gap: 18px;
}

.nav a {
  text-decoration: none;
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 44px 0 30px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero h1,
.section-heading h2 {
  margin: 0;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  max-width: 620px;
}

.subtitle {
  color: var(--muted);
  line-height: 1.75;
  font-size: 1.08rem;
  max-width: 560px;
  margin-top: 18px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn,
.mode-btn,
.answer-btn,
#nextBtn {
  appearance: none;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary-btn,
#nextBtn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #06131d;
  font-weight: 700;
  padding: 14px 22px;
  text-decoration: none;
  box-shadow: 0 18px 30px rgba(83, 169, 255, 0.25);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 14px 22px;
  text-decoration: none;
}

.primary-btn:hover,
.secondary-btn:hover,
.mode-btn:hover,
.answer-btn:hover,
#nextBtn:hover {
  transform: translateY(-1px);
}

.hero-visual {
  position: relative;
  height: 420px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(11, 29, 48, 0.86), rgba(17, 28, 46, 0.7));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.orbital-ring {
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(124, 199, 255, 0.58);
  border-radius: 50%;
}

.ring-one {
  width: 230px;
  height: 230px;
  animation: orbit 9s linear infinite;
}

.ring-two {
  width: 300px;
  height: 300px;
  border-color: rgba(167, 139, 250, 0.5);
  animation: orbit 12s linear infinite reverse;
}

.core {
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at 35% 35%, #e7f8ff, #7ef6d8 28%, #1d8adb 60%, #0a1f37 100%);
  box-shadow: 0 0 26px rgba(126, 246, 216, 0.6);
}

.electron {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #f5fbff, #7cc7ff 35%, #3158b9 100%);
  box-shadow: 0 0 18px rgba(124, 199, 255, 0.7);
}

.electron-one {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin-one 5s linear infinite;
}

.electron-two {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin-two 7s linear infinite;
}

.wave {
  position: absolute;
  width: 78%;
  height: 70px;
  left: 11%;
  border-radius: 50%;
  border: 2px solid rgba(126, 246, 216, 0.8);
  background: rgba(126, 246, 216, 0.08);
  box-shadow: 0 0 25px rgba(126, 246, 216, 0.15);
}

.wave-one {
  top: 26%;
  transform: rotate(-6deg);
  animation: ripple 4s ease-in-out infinite;
}

.wave-two {
  top: 60%;
  transform: rotate(8deg);
  animation: ripple 5.5s ease-in-out infinite reverse;
}

.pulse {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(167, 139, 250, 0.8);
  opacity: 0.5;
}

.pulse-one {
  animation: pulseOut 4s ease-out infinite;
}

.pulse-two {
  animation: pulseOut 5s ease-out infinite 1s;
}

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.04);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}

@keyframes spin-one {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
  }
}

@keyframes spin-two {
  0% {
    transform: translate(-50%, -50%) rotate(120deg) translateX(150px) rotate(-120deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(480deg) translateX(150px) rotate(-480deg);
  }
}

@keyframes ripple {
  0%,
  100% {
    transform: scaleX(0.9) scaleY(1) rotate(-6deg);
    opacity: 0.6;
  }
  50% {
    transform: scaleX(1.08) scaleY(1.15) rotate(-6deg);
    opacity: 1;
  }
}

@keyframes pulseOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.6);
  }
}

.concepts,
.simulator,
.quiz-section {
  padding-top: 54px;
}

.section-heading {
  margin-bottom: 22px;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.concept-card {
  background: rgba(14, 27, 43, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 20px;
  box-shadow: var(--shadow);
}

.concept-card .icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  margin-bottom: 18px;
  background: rgba(124, 199, 255, 0.12);
  color: var(--primary);
  font-size: 1.5rem;
}

.concept-card h3 {
  margin: 0 0 12px;
  font-size: 1.24rem;
}

.concept-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.simulator-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.simulator-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.mode-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid transparent;
  padding: 10px 16px;
}

.mode-btn.active {
  background: rgba(124, 199, 255, 0.18);
  border-color: rgba(124, 199, 255, 0.45);
  color: var(--primary);
}

.simulator-visual {
  background: linear-gradient(180deg, rgba(6, 16, 29, 0.8), rgba(12, 25, 40, 0.88));
  border-radius: 20px;
  border: 1px solid rgba(124, 199, 255, 0.16);
  overflow: hidden;
}

#quantumCanvas {
  width: 100%;
  height: auto;
  display: block;
}

.simulator-text {
  margin-top: 18px;
}

.simulator-text h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}

.simulator-text p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.quiz-card {
  background: rgba(14, 27, 43, 0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px 20px 20px;
  box-shadow: var(--shadow);
}

.quiz-progress {
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  margin-bottom: 12px;
}

#questionText {
  margin: 0 0 18px;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.answer-list {
  display: grid;
  gap: 12px;
}

.answer-btn {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: var(--text);
  padding: 14px 16px;
}

.answer-btn.correct {
  background: rgba(126, 246, 216, 0.12);
  border-color: rgba(126, 246, 216, 0.42);
  color: #dafff3;
}

.answer-btn.incorrect {
  background: rgba(255, 123, 147, 0.12);
  border-color: rgba(255, 123, 147, 0.42);
  color: #ffdfe7;
}

.answer-btn:disabled {
  cursor: default;
  opacity: 1;
}

.feedback {
  margin-top: 18px;
  padding: 12px 14px;
  border-radius: 12px;
  line-height: 1.6;
}

.feedback.success {
  background: rgba(126, 246, 216, 0.1);
  border: 1px solid rgba(126, 246, 216, 0.24);
  color: #dffdf1;
}

.feedback.error {
  background: rgba(255, 123, 147, 0.09);
  border: 1px solid rgba(255, 123, 147, 0.24);
  color: #ffe4eb;
}

.hidden {
  display: none;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .nav {
    gap: 10px;
    flex-wrap: wrap;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    max-width: unset;
  }

  .hero-visual {
    height: 300px;
  }
}
