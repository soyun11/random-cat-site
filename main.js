// 버튼과 이미지 요소 찾기
const button = document.getElementById("catBtn");
const catImage = document.getElementById("catImage");
const kakaoShareBtn = document.getElementById("kakaoShareBtn");

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

Kakao.init('64f9207089c7452b3bd8c40e5c0c385d'); // 발급받은 키

// 공유 버튼 클릭
kakaoShareBtn.addEventListener("click", () => {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '랜덤 고양이 뽑기!',
      description: '버튼 클릭해서 랜덤 고양이 사진 보기 😺',
      imageUrl: catImage.src || 'https://placekitten.com/400/300', 
      link: {
        mobileWebUrl: 'https://username.github.io/random-cat-site/',
        webUrl: 'https://username.github.io/random-cat-site/'
      }
    },
    buttons: [
      {
        title: '고양이 보러가기',
        link: {
          mobileWebUrl: 'https://username.github.io/random-cat-site/',
          webUrl: 'https://username.github.io/random-cat-site/'
        }
      }
    ]
  });
});
