window.addEventListener('load', function() {
  var addList = document.getElementById('text-addList');
  var form = document.getElementById('form');
  var list = document.getElementById('add-list');

  addList.addEventListener('click', function() {
    addList.classList.toggle('display-none');
    form.classList.toggle('display-none');
    
  });

});

