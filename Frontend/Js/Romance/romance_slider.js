

function moveLeftromance(){
    const child2 = document.getElementsByClassName("child3")[0];
    var items2 = child2.children;
    item2 = items2[6];
    items2[6].remove();
    child2.insertBefore(item2, child2.firstChild);
  }
  
function moveRightromance(){
    var child2 = document.getElementsByClassName("child3")[0];
    var items2 = child2.children;
    item2 = items2[0];
    items2[0].remove();
    child2.insertBefore(item2, child2[-1]);
  }

document.querySelector('.parentromance .leftarrow').addEventListener('click', moveLeftromance);
document.querySelector('.parentromance .rigtharrow').addEventListener('click', moveRightromance);  
  