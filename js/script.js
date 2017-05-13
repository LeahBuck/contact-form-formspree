(function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');
  
  myForm.addEventListener('submit', function(event) {
    myForm.setAttribute('action', 'https://formspreee.io/johndoe919909@gmail.com');
    return true;
  });
}());