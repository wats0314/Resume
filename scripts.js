window.addEventListener('load', function() {
    var objectiveButton = document.getElementById('objective');
    var objElement = document.getElementById('obj');
  
    objectiveButton.addEventListener('click', function(event) {
      event.preventDefault();
      objElement.style.display = 'none';
    });
  });