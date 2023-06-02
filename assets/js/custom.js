AOS.init();

//res-nav

let openBtn=document.getElementById('open-btn')
let closeBtn=document.getElementById('close-btn')
let navmobile=document.getElementById('nav-mobile')

openBtn.addEventListener('click',function(){
    navmobile.style.visibility="visible";
    navmobile.style.width='80%';
})
closeBtn.addEventListener('click',function(){
    navmobile.style.visibility="hidden";
    navmobile.style.width='0';
})

// Back To Top Button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
