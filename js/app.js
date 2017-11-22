window.addEventListener('load', function() {
  var addList = document.getElementById('text-addList');
  var form = document.getElementById('form');
  var containerList = document.getElementById('add-list');
  var button = document.getElementById('list-add-button');
  var nameList = document.getElementById('list-name');

  addList.addEventListener('click', function() {
    addList.classList.toggle('display-none');
    form.classList.toggle('display-none');
  });
  
  button.addEventListener('click', function(event) {
    event.preventDefault();
    if (nameList.value) {
      form.classList.toggle('display-none');
      var div = document.createElement('div');
      div.classList.add('title-list');
      var titleList = document.createTextNode(nameList.value.toUpperCase());
      div.appendChild(titleList);

      form.parentElement.insertBefore(div, form);
    }
    var linkList = document.createElement('a');
    linkList.setAttribute('href', '#');
    linkList.classList.add('open-card');
    var linkTitle = document.createTextNode('Añadir una tarea...');
    linkList.appendChild(linkTitle);
    div.parentElement.appendChild(linkList);
  });
});

