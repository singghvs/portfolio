AOS.init();
$("#top-button").click(
    function(){
        $("html,body").animate({scrollTop: 0}, 500);
    }
);
var scriptURL ="https://script.google.com/macros/s/AKfycbxgTY-l-Fznt71rv4h81saf4ZNVWWfd_5-Fw1jQ12SO_tafd48ytIYVnZTgnMXhCixI/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});


//scroll to top
$("#top-button").click(function(){
    $("html, body").animate({scrollTop: 0}, 1000);
});

