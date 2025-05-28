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
    playNext(); // 시작
  }
  
  function playNext() {
    // 랜덤 음성 선택
    const index = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio(audioFiles[index]);
  
    // 재생 시작
    audio.play().then(() => {
      console.log(`[응디] 재생 시작: ${audioFiles[index]}`);
    }).catch(err => {
      console.warn("재생 오류:", err);
      setTimeout(playNext, 200); // 실패해도 루프 유지
    });
  
    // 재생 끝나면 다음
    audio.addEventListener("ended", () => {
      setTimeout(playNext, 200); // 0.2초 텀 후 다음 재생
    });
  }
  