(function(){
  var myForm = document.getElementById('EmailForm');
  var submitButton = document.getElementById('SubmitButton');
  var message = document.getElementById('Message');
  var charactersDisplay = document.getElementById('MaxCharacters');
  var charactersRemaining = 150;

  message.addEventListener('focus', function(event) {
    var charactersUsed = message.value.length;
    charactersDisplay.textContent = "Characters remaining: " + (charactersRemaining - charactersUsed);
  });

  message.addEventListener('keydown', function(event) {
    var charactersUsed = message.value.length;
    charactersDisplay.textContent = "Characters remaining: " + (charactersRemaining - charactersUsed);
  });

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
}());