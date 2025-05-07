const lines = [
    "Yıl: 2030",
    "Konum: Dijital galaksi",
    "Mesaj:",
    "Merhaba gezgin,",
    "Bilgiye olan yolculuğun burada başlıyor...",
    "Hazırsan,",
    "Yıldızlar seni bekliyor."
  ];
  
  let index = 0;
  const messageEl = document.getElementById('message');
  const buttonEl = document.getElementById('start-btn');
  
  function typeLine() {
    if (index < lines.length) {
      const line = lines[index];
      let charIndex = 0;
      const typeChar = setInterval(() => {
        if (charIndex < line.length) {
          messageEl.textContent += line[charIndex];
          charIndex++;
        } else {
          messageEl.textContent += "\n";
          clearInterval(typeChar);
          index++;
          setTimeout(typeLine, 700);
        }
      }, 50);
    } else {
      buttonEl.classList.remove('hidden');
    }
  }
  
  window.onload = typeLine;
  
  buttonEl.addEventListener('click', () => {
    document.body.style.transition = 'all 1s ease';
    messageEl.textContent = '';
    buttonEl.classList.add('hidden');
  
    setTimeout(() => {
      messageEl.textContent = "🚀 Yolculuk başladı...";
      messageEl.style.fontSize = "2rem";
  
      // Roketi oluştur
      const rocket = document.createElement("div");
      rocket.classList.add("rocket");
      document.body.appendChild(rocket);
  
      // Roket yukarı hareket etsin
      setTimeout(() => {
        rocket.style.bottom = "120%";
      }, 100);
    }, 1000);
  });
  