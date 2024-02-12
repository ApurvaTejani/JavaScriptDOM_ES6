let movies = [
    {
        title: "Fight Club",
        rank: 10,
        year: 1997
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        year: 2001
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        year: 2005
    },
    {
        title: "The Godfather",
        rank: 2,
        year: 1956
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        year: 1947
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        year: 1998
    },
    {
        title: "The Dark Knight",
        rank: 6,
        year: 2004
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        year: 2006
    },
    {
        title: "Schindler's List",
        rank: 8,
        year: 1951
    },
    {
        title: "12 Angry Men",
        rank: 7,
        year: 1955
    }
]

window.onload = function() {
  // let sortedMovieList = sortMoviesByRank(movies)
//   let sortedMovieList = sortMoviesByAttr(movies, 'rank');
  // Display Movies list

//   deleteRowing();
//   d`ocument.getElementById("byrank")`.addEventListener("click",getMovieListSortByRank(movies))
  
//  document.getElementById("byyear").addEventListener("click",getMovieListSortByYear(movies))
//  document.getElementById("byname").addEventListener("click",getMovieListSortByName(movies))

   displayMovies(movies);
   
   //document.getElementById("byrank").addEventListener("click",getMovieListSortByRank(movies))

}

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%' id='myTable'>";
    table += "<tr class='new'><th>Name</th><th>Year</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr class='new'>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].year + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}

function getMovieListSortByRankAsc(movies){
  
    movies.sort((a, b) => a.rank - b.rank);
    displayMovies(movies);
}

function getMovieListSortByYearAsc(movies){
    movies.sort((a, b) => a.year - b.year);
    
    displayMovies(movies);
}
function getMovieListSortByRankDec(movies){
    movies.sort((a, b) => b.rank - a.rank);
    displayMovies(movies);
}

function getMovieListSortByYearDec(movies){
    movies.sort((a, b) => b.year - a.year);
    
    displayMovies(movies);
}

function getMovieListSortByNameAsc(movies){
    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }
      let movieSortbyNAme = movies.sort(compare);
      displayMovies(movieSortbyNAme);
}

function getMovieListSortByNameDec(movies){
    function compare( a, b ) {
        if ( b.title < a.title ){
          return -1;
        }
        else if ( b.title > a.title ){
          return 1;
        }
        else
        return 0;
      }
      let movieSortbyNAme = movies.sort(compare);
      displayMovies(movieSortbyNAme);
}
function deleteRowing() {
    document.getElementById("myTable").deleteRow(1);
 
  }

//   function deleteColumning() {
//     document.querySelector('.new').deleteCell(0);
//   }