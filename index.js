function getFirstSelector (selector) {
  //accepts a selector and returns the first element that matches
 return document.querySelector(selector);
}
function nestedTarget() {
//.target out of #nested
return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  //parseInt -- increases the ranks in all of the .ranked-list by n
  var ranks = document.querySelectorAll('ul.ranked-list')
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}
function deepestChild(){
  var hidden = document.getElementById('grand-node').querySelectorAll('div')
  return hidden[hidden.length-1]
}
