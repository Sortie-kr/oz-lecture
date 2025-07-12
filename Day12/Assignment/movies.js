//배열선언
let movies = [];
//기본장르
const defaultGenre = "unknown";
//영화갯수
var movieCount = 0;

const movie1 = {
  title: "a",
  director: "aa",
  year: "aaa",
  genre: "aaaa",
};
const movie2 = {
  title: "b",
  director: "bb",
  year: "bbb",
  genre: "bbbb",
};
const movie3 = {
  title: "c",
  director: "cc",
  year: "ccc",
  genre: "cccc",
};
const movie4 = {
  title: "d",
  director: "dd",
  year: "ddd",
  genre: "dddd",
};

//배열에 추가
movies.push(movie1, movie2, movie3, movie4);
movieCount = movies.length;

function printMovies(movies) {
  console.log("Movie Collection");
}

for (let i = 0; i < movies.length; i++) {
  let movie = movies[i];
  console.log(
    `${i + 1}. Title: ${movie.title}, 
      Director: ${movie.director}, 
      Year: ${movie.year}, 
      Genre: ${movie.genre}`
  );
}

console.log(`Total Movies: ${movies.length}`);

printMovies(movies);
