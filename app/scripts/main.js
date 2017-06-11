// Preload Images
$.fn.preload = function() {
    this.each(function(){
        $('<img />')[0].src = '../../images/photos/' + this + '.jpg';
    });
}

const photos = ['IMG_3522', 'IMG_1880', 'IMG_8295', 'IMG_5184', 'IMG_8286', 'IMG_4861'];

$(document).ready(function() {
  $(photos).preload();

  $('.hexagon').css({'background-image':'url(\'../../images/photos/'+photos[0]+'.jpg\')'});
  var i = 1;
  setInterval(function() {
    $('.hexagon').css({'background-image':'url(\'../../images/photos/'+photos[i]+'.jpg\')'});
    i++;
    if (i >= photos.length) i = 0;
  }, 5000);
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
var resumeSwitchInit = new Switchery(resumeSwitch, { color: '#444' });
resumeSwitch.onchange = function() {
  if (resumeSwitch.checked) {
    $('.resume-section').show();
  } else {
    $('.resume-section').hide();
  }
}
