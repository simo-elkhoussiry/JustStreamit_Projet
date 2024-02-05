const urlMeilleurFilm = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

function requestMeilleurFilm(urlMeilleurFilm){
  return fetch(urlMeilleurFilm).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function sortMovie(movies){
  var maxVotes = 0;
  var movieId = 0;
  for (let i = 0; i < movies.length; i++) {
    if (maxVotes < parseInt(movies[i]['votes'])) {
      maxVotes = movies[i]['votes'];
      movieId = parseInt(movies[i]['id']);
    } else {
      continue;
    }
  }
  return movieId;
};


function extractDataMeilleurFilm(movieId){

  
  const endpoint = "http://localhost:8000/api/v1/titles/"
  const urlMeilleurFilm = endpoint.concat('', movieId);


  const parent = document.getElementsByClassName('meilleur-film-parent')[0];
  const item = parent.children[0];


  
  const img = item.getElementsByTagName('img')[0];
  var title = item.getElementsByClassName("title")[0];
  var description = item.getElementsByClassName("description")[0];
  var button = item.getElementsByClassName("btn-more")[0].children[0];


  fetch(urlMeilleurFilm)
    .then(response => response.json())
    .then(data => {
     
      img.src = data['image_url'];
      title.innerHTML = data['title'];
      description.innerHTML = `${data['description']}`;
      button.setAttribute("id", `${movieId}`);
      });
};


function MainMeilleurFilm(){
  requestMeilleurFilm(urlMeilleurFilm).then(function(result) {
      movieId = sortMovie(result['results']);
      extractDataMeilleurFilm(movieId);
    });
}

MainMeilleurFilm();