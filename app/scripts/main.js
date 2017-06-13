// Preload Images
$.fn.preload = function() {
    this.each(function(){
        $('<img />')[0].src = 'http://cdn.amruthpillai.com/images/photos/' + this + '.jpg';
    });
}

const photos = ['IMG_3522', 'IMG_1880', 'IMG_8295', 'IMG_5184', 'IMG_8286', 'IMG_4861'];

$(document).ready(function() {
  $(function () {
    $("#english-percircle").percircle();
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('#english-percircle').percircle({
    progressBarColor: '#d9534f',
    text: 'English',
    percent: 100
  });

  $('#tamil-percircle').percircle({
    progressBarColor: '#0275d8',
    text: 'Tamil',
    percent: 75
  });

  $('#kannada-percircle').percircle({
    progressBarColor: '#5cb85c',
    text: 'Kannada',
    percent: 75
  });

  $(photos).preload();

  $('.hexagon').css({'background-image':'url(\'http://cdn.amruthpillai.com/images/photos/'+photos[0]+'.jpg\')'});
  var i = 1;
  setInterval(function() {
    $('.hexagon').css({'background-image':'url(\'http://cdn.amruthpillai.com/images/photos/'+photos[i]+'.jpg\')'});
    i++;
    if (i >= photos.length) i = 0;
  }, 5000);

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow', function(){
        window.location.hash = hash;
      });
    }
  });
});

$('#scroll-to-content').click(function() {
  $('html, body').animate({
    scrollTop: $('#scroll-hook').offset().top
  }, 'slow');
});

$('#scroll-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 'slow');
});

var resumeSwitch = document.querySelector('#resume-switch');
var resumeSwitchInit = new Switchery(resumeSwitch, { color: '#d9534f' });
resumeSwitch.onchange = function() {
  $('.resume-section').fadeToggle('slow');
}
