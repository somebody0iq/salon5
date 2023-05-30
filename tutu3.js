const reviews = document.getElementById('reviews');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentReviewIndex = 0;

function showReview(reviewArray, index) {
  const reviewItems = reviewArray.getElementsByClassName('review-item');
  for (let i = 0; i < reviewItems.length; i++) {
    reviewItems[i].classList.remove('active');
  }
  reviewItems[index].classList.add('active');
}

function showNextReview() {
  currentReviewIndex++;
  if (currentReviewIndex >= reviews.getElementsByClassName('review-item').length) {
    currentReviewIndex = 0;
  }
  showReview(reviews, currentReviewIndex);
}

function showPrevReview() {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.getElementsByClassName('review-item').length - 1;
  }
  showReview(reviews, currentReviewIndex);
}

prevBtn.addEventListener('click', showPrevReview);
nextBtn.addEventListener('click', showNextReview);
showReview(reviews, currentReviewIndex);

