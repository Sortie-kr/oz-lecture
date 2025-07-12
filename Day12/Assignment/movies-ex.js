// =============================
// 🎬 영화 컬렉션 관리 프로그램
// =============================

// 💡 영화 정보를 담을 배열 선언 (let 사용)
let movies = [];

// 💡 기본 장르를 정의 (const 사용)
const defaultGenre = "Unknown";

// 💡 총 영화 개수를 세는 변수 (var 사용)
var movieCount = 0;

// =============================
// 📦 영화 객체 3개 하드코딩 생성
// =============================

const movie1 = {
  title: "The Matrix", // 제목
  director: "Wachowskis", // 감독
  year: 1999, // 개봉연도
  genre: "Sci-Fi", // 장르
};

const movie2 = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi",
};

const movie3 = {
  title: "Parasite",
  director: "Bong",
  year: 2019,
  genre: "Drama",
};

// =============================
// 📥 영화들을 배열에 추가
// =============================

// movies 배열에 영화 객체들을 한꺼번에 추가
movies.push(movie1, movie2, movie3);

// movieCount를 배열 길이로 설정
movieCount = movies.length;

// =============================
// 🛠️ 누락된 속성이 있다면 기본값으로 채워주기
// =============================

for (let i = 0; i < movies.length; i++) {
  let movie = movies[i];

  // 만약 제목이 없다면 "Untitled"로
  if (!movie.title) movie.title = "Untitled";

  // 감독 정보가 없다면 "Unknown"으로
  if (!movie.director) movie.director = "Unknown";

  // 장르 정보가 없다면 defaultGenre로
  if (!movie.genre) movie.genre = defaultGenre;
}

// =============================
// 📤 영화 목록을 출력하는 함수
// =============================

// 함수 선언문 방식으로 정의 (필수 요구사항)
function printMovies(movies) {
  console.log("Movie Collection:");

  // 배열을 순회하며 각 영화 정보 출력
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    // `${}`를 사용한 템플릿 문자열로 보기 좋게 출력
    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
  }

  // 총 영화 수 출력
  console.log(`Total Movies: ${movies.length}`);
}

// =============================
// ▶️ 실행 (함수 호출)
// =============================

printMovies(movies);
