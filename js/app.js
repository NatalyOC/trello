window.addEventListener('load', function() {
  var addList = document.getElementById('text-addList');
  var form = document.getElementById('form');
  var containerList = document.getElementById('add-list');
  var button = document.getElementById('list-add-button');
  var nameList = document.getElementById('list-name');
  /* Versión 0.0.1 */
  addList.addEventListener('click', function(event) {
    event.target.classList.toggle('display-none');
    form.classList.toggle('display-none');
  });
  /* Versión 0.0.2 */
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
    var linkTask = document.createElement('a');
    linkTask.setAttribute('href', '#');
    linkTask.classList.add('task');
    var linkTitle = document.createTextNode('Añadir una tarea...');
    linkTask.appendChild(linkTitle);
    div.parentElement.appendChild(linkTask);
    /* Versión 0.0.6 (Extra) */
    var containerRight = document.createElement('div');
    containerRight.classList.add('container-form-list');
    form.parentElement.parentElement.appendChild(containerRight);
    containerRight.appendChild(addList);
    addList.classList.toggle('display-none');

    containerRight.insertBefore(form, containerRight.firstElementChild);
    /* Versión 0.0.3 */
    linkTask.addEventListener('click', function(event) {
      event.preventDefault();
      linkTask.classList.toggle('task');
      linkTask.classList.add('display-none');

      var subForm = document.createElement('form');
      var textArea = document.createElement('textarea');
      textArea.classList.add('list-name-input');

      var btnTask = document.createElement('input');
      btnTask.setAttribute('value', 'Añadir');
      btnTask.setAttribute('type','submit');
      btnTask.classList.add('list-add-button');
      subForm.appendChild(textArea);
      subForm.appendChild(btnTask);
      event.target.parentElement.appendChild(subForm); 
      btnTask.disabled = false;
      textArea.focus();
      
      /* Versión 0.0.4 - Versión 0.0.5 */
      btnTask.addEventListener('click', function(event) {
        event.preventDefault();
        var titleTask = document.createTextNode(btnTask.previousElementSibling.value.trim());
        var divTask = document.createElement('div');
        divTask.classList.add('task-title');
        divTask.appendChild(titleTask);
        var fatherButton = event.target.parentElement;
        fatherButton.classList.toggle('display-none');
        fatherButton.parentElement.appendChild(divTask);
        divTask.parentElement.appendChild(fatherButton.previousElementSibling);
        fatherButton.parentElement.lastElementChild.classList.toggle('task');
        fatherButton.parentElement.lastElementChild.classList.toggle('display-none');

      });
    });


  });


});

