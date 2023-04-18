// QnA 버튼 클릭 시
const QnABtn = document.querySelector('.QnABtn-icon-container');
const QnAContainer = document.querySelector('.QnABtn-container');

QnABtn.addEventListener('click', () => {
  // QnA 컨테이너 토글
  QnAContainer.classList.toggle('show');
});
