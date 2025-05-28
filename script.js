const audioFiles = [
  "응디.wav",
  "부끄러운줄.wav",
  "형님.wav",
  "바짓가랭이.wav",
  "부엉이바위.wav"
];

let isRunning = false;

function startUnji() {
  if (isRunning) return;
  isRunning = true;
  document.body.classList.add("unji-effect");
  playNext();
}

function playNext() {
  const index = Math.floor(Math.random() * audioFiles.length);
  const audio = new Audio(audioFiles[index]);
  audio.play().catch(() => setTimeout(playNext, 200));
  audio.onended = () => setTimeout(playNext, 200);
}
