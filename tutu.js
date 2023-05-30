document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const reservationInfo = document.getElementById("reservation-info");
    reservationInfo.textContent = `Вы забронировали время на ${date} в ${time}. Ваше имя: ${name}, ваш email: ${email}.`;
  });
  
  const promoButton = document.getElementById("promo-button");
  const promoPopup = document.getElementById("promo-popup");
  const closePromo = document.getElementById("close-promo");
  
  promoButton.addEventListener("click", function() {
    promoPopup.style.display = "block";
  });
  
  closePromo.addEventListener("click", function() {
    promoPopup.style.display = "none";
  });
  
  const slider = document.getElementById('slider');
  const slides = slider.getElementsByTagName('img');
  let currentSlide = 0;
  
  function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
  }
  
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide();
  }
  
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide();
  }
  
  showSlide();
  setInterval(nextSlide, 5000);
console.log("cay")  


function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}
const btnUp = { 
  el: document.querySelector('.btn-up'), 
  show() { 
    // удалим у кнопки класс btn-up_hide 
    this.el.classList.remove('btn-up_hide'); 
  }, 
  hide() { 
    // добавим к кнопке класс btn-up_hide 
    this.el.classList.add('btn-up_hide'); 
  }, 
  addEventListener() { 
    // при прокрутке содержимого страницы 
    window.addEventListener('scroll', () => { 
      // определяем величину прокрутки 
      const scrollY = window.scrollY || document.documentElement.scrollTop; 
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем 
      scrollY > 400 ? this.show() : this.hide(); 
    }); 
    // при нажатии на кнопку .btn-up 
    document.querySelector('.btn-up').onclick = () => { 
      // переместим в начало страницы 
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      }); 
    } 
  } 
} 
btnUp.addEventListener(); 