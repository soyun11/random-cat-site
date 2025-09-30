// 버튼과 이미지 요소 찾기
const button = document.getElementById("catBtn");
const catImage = document.getElementById("catImage");

// 버튼 클릭 이벤트
button.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      // API에서 받은 랜덤 고양이 사진 URL 넣기
      catImage.src = data[0].url;
    })
    .catch(err => {
      console.error("고양이를 불러오는 중 오류 발생:", err);
    });
});
