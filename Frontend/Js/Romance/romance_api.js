
function selectRomanceFilms(request_url){
    return fetch(request_url).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json;
    });
  }
  
  function mainRomanceFilms(){
      // urls variables 
      const urlPage1 = "http://localhost:8000/api/v1/titles/?genre=romance&sort_by=-imdb_score"
      const urlPage2 = "http://localhost:8000/api/v1/titles/?genre=romance&sort_by=-imdb_score&page=2"
  
      // get parent node
      var container3 = document.getElementsByClassName("parent3")[0];
      var allBox3 = container3.getElementsByClassName("child3")[0];
      var items3 = allBox3.getElementsByClassName('item');
  
      // variables 
      var nbRomanceFilmsAdded  = 0;
  
      for (urlRomancePage of [urlPage1, urlPage2]){
          selectRomanceFilms(urlRomancePage).then(function(result) {
                for (let i = 0; i < result['results'].length; i++){
                    if (nbRomanceFilmsAdded < 7){
                        // update item
                        img = items3[nbRomanceFilmsAdded].getElementsByTagName("img")[0];
                        img.src = `${result['results'][i]['image_url']}`;
                        img.setAttribute('onclick', 'openModal(this)');
                        img.setAttribute("id", `${result['results'][i]['id']}`);
                    }
                  nbRomanceFilmsAdded++;
                }
             });	
      }
  }
  
  
document.addEventListener('DOMContentLoaded', mainRomanceFilms());