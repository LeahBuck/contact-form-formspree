(function(){
  var $ = jQuery;
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');
  
  myForm.addEventListener('submit', function(event) {
    // myForm.setAttribute('action', 'https://formspree.io/johndoe919909@gmail.com');
    $.ajax({
        url: "https://formspree.io/michael.wallert@gmail.com", 
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
  });
}());