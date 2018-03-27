//define functions here

function getIt() {
  $("p").on('click', function() {;
  alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
  $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which === 72);
    alert('a true G');
  });
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
