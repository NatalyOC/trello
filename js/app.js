window.addEventListener('load', function() {
  var addList = document.getElementById('text-addList');
  var list= document.getElementById('add-list');
  addList.addEventListener('click', function() {
    addList.classList.add('hidden');
    list.classList.add('show');
  });

});

