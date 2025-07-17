// Array.map()
// 배열을 다른 배열로 매핑할 때 사용

let movies = [
  {
    title: "미션 임파서블:파이널 레코닝",
    director: "크리스토퍼 맥쿼리",
    year: 2025,
    genre: "Action",
  },
  {
    title: "파묘",
    director: "장재현",
    year: 2024,
    genre: "Mistery",
  },
  {
    title: "서울의 봄",
    director: "김성수",
    year: 2023,
    genre: "Drama",
  },
];

// title 만 배열로 뽑아서 확인하고 싶다.
// for 문
const titles = [];
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  titles.push(movie.title);
}

// Array.map
const titlesByMap = movies.map((movie) => {
  return movie.title;
});
const titlesByMapShort = movies.map((movie) => movie.title);
// console.log(titlesByMap);

// {title, director}만 있는 배열로 확인하고 싶다.
// for문
const infoArr = [];
for (const movie of movies) {
  infoArr.push({
    title: movie.title,
    director: movie.director,
  });
}
for (const movie of movies) {
  const { title, director } = movie;
  infoArr.push({
    title,
    director,
  });
}
for ({ title, director } of movies) {
  infoArr.push({
    title,
    director,
  });
}
// console.log(infoArr);

// map
const infoArrByMap = movies.map((movie) => {
  return {
    title: movie.title,
    director: movie.director,
  };
});

// 모든 Movie에 hit:0 속성을 넣어주고 싶다.
const newMovies = movies.map((movie) => {
  return {
    ...movie,
    hit: 0,
  };
});

// 모든 Movie의 director 값을 "taem"으로 바꾸고 싶다.
const taemMovies = movies.map((movie) => {
  return {
    ...movie,
    director: "taem",
  };
});
// console.log(taemMovies);

////////////////////////////////////////////////

movies = [
  {
    title: "미션 임파서블:파이널 레코닝",
    director: "크리스토퍼 맥쿼리",
    year: 2025,
    genre: "Action",
    hit: 100,
  },
  {
    title: "파묘",
    director: "장재현",
    year: 2024,
    genre: "Mistery",
    hit: 200,
  },
  {
    title: "서울의 봄",
    director: "김성수",
    year: 2023,
    genre: "Drama",
    hit: 300,
  },
];
let numbers = [1, 2, 3, 4, 5];

// 짝수만 뽑아낸 배열 만들기
// for문
const evenArr = []; // [2, 4]
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) evenArr.push(num);
}

// filter
const evenArrFilter = numbers.filter((num) => {
  return num % 2 === 0;
});

// 2024년 이후 영화만 사용한다.
const moviesAfter2024 = movies.filter((movie) => {
  let year = movie.year;
  if (year >= 2024) return true;
  else return false;
});
const moviesAfter2024Short = movies.filter((movie) => movie.year >= 2024);

// 조회수 350 초과 영화만 사용한다.
const moviesUpperHit350 = movies.filter((movie) => {
  const hit = movie.hit;
  if (hit >= 350) return true;
  else return false;
});
const moviesUpperHit350Short = movies.filter((movie) => movie.hit >= 350);

/////////////////////////////////////////

movies = [
  {
    title: "미션 임파서블:파이널 레코닝",
    director: "크리스토퍼 맥쿼리",
    year: 2025,
    genre: "Action",
    hit: 100,
  },
  {
    title: "파묘",
    director: "장재현",
    year: 2024,
    genre: "Mistery",
    hit: 200,
  },
  {
    title: "서울의 봄",
    director: "김성수",
    year: 2023,
    genre: "Drama",
    hit: 300,
  },
];
numbers = [1, 2, 3, 4, 5];

// forEach ; 배열의 각 항목을 반복하면서 특정작업을 수행하는 함수
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});

//reduce()배열을 하나의 값으로 줄이는데 사용되는 고급 메서드
// array.reduce((누적값,현재값) => {...}, 초기값)
const sumReduce = numbers.reduce((acc, num) => {
  return acc + num; // 누적값에 현재값은 더해서 리터ㄴ해라
}, 0);
const sumReduceShort = numbers.reduce((acc, num) => acc + num, 0);
//numers.reduce(acc,num)에 대해 => acc + num으로 반환하고, 초기값은 0으로 지정

// 최대값, 최솟값 탐색
// 최솟값
const min = numbers.reduce((acc, num) => (acc > num ? num : acc), 100);
// (acc < num ? num : acc) 현재값이 더 크냐? 그러면 num유지, 아니면 acc 유지
const max = numbers.reduce((acc, num) => (acc < num ? num : acc), 0);
console.log("max:", max);

////////////////////////////////////
// 함수 조합
numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter((num) => num % 2 === 0) // 2로 나눴을때 나머지가 0인것만 찾아
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

const a = numbers.filter((num) => num % 2 === 0);
console.log(a);
const b = a.map((num) => num * 2);
console.log(b);
const c = b.reduce((acc, num) => acc + num, 0);
console.log(c);
