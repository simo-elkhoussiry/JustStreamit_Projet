
function selectTrillerFilms(request_url){
    return fetch(request_url).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json;
    });
  }
  
  function mainTrillerFilms(){
      // urls variables 
      const urlPage1 = "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-imdb_score"
      const urlPage2 = "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-imdb_score&page=2"
  
      // get parent node
      var container4 = document.getElementsByClassName("parent4")[0];
      var allBox4 = container4.getElementsByClassName("child4")[0];
      var items4 = allBox4.getElementsByClassName('item');
  
      // variables 
      var nbTrillerFilmsAdded  = 0;
  
      for (urlThrillerPage of [urlPage1, urlPage2]){
          selectTrillerFilms(urlThrillerPage).then(function(result) {
                for (let i = 0; i < result['results'].length; i++){
                    if (nbTrillerFilmsAdded < 7){
                        // update item
                        img = items4[nbTrillerFilmsAdded].getElementsByTagName("img")[0];
                        img.src = `${result['results'][i]['image_url']}`;
                        img.setAttribute('onclick', 'openModal(this)');
                        img.setAttribute("id", `${result['results'][i]['id']}`);
                  }
                  nbTrillerFilmsAdded++;
                }
             });	
      }
  }
  
  mainTrillerFilms();




 