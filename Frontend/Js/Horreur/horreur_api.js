
function selectHorreurFilms(request_url){
    return fetch(request_url).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json;
    });
  }
  
  function mainHorreurFilms(){
      // urls variables 
      const urlPage1 = "http://localhost:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score"
      const urlPage2 = "http://localhost:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score&page=2"
  
      // get parent node
      var container2 = document.getElementsByClassName("parent2")[0];
      var allBox2 = container2.getElementsByClassName("child2")[0];
      var items2 = allBox2.getElementsByClassName('item');
  
      // variables 
      var nbHorreurFilmsAdded  = 0;
  
      for (urlHorreurPage of [urlPage1, urlPage2]){
          selectHorreurFilms(urlHorreurPage).then(function(result) {
                for (let i = 0; i < result['results'].length; i++){
                    if (nbHorreurFilmsAdded < 7){
                        // update item
                        img = items2[nbHorreurFilmsAdded].getElementsByTagName("img")[0];
                        img.src = `${result['results'][i]['image_url']}`
                        img.setAttribute('onclick', 'openModal(this)');
                        img.setAttribute("id", `${result['results'][i]['id']}`);
                  }
                  nbHorreurFilmsAdded++;
                }
             });	
      }
  }

document.addEventListener('DOMContentLoaded', mainHorreurFilms());