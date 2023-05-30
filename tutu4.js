document.getElementById("create-review-btn").addEventListener("click", function() {
    // Вызываем функцию для создания отзыва
  
    // Выводим сообщение "Спасибо за отзыв"
    alert("Спасибо за отзыв!");
  });
  function createReview() {
    // Отправляем данные на сервер и сохраняем отзыв в базу данных
  }
  document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
  
    // Вызываем функцию для создания отзыва
    createReview();
  
    // Выводим сообщение "Спасибо за отзыв"
    alert("Спасибо за отзыв!");
  });
