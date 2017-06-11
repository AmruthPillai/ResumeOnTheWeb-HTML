$('#scroll-more').click(function() {
  $('html, body').animate({
    scrollTop: $('#scroll-hook').offset().top
  }, 'slow');
});

const photos = ['IMG_3522', 'IMG_1880', 'IMG_8295', 'IMG_5184', 'IMG_8286', 'IMG_4861'];

$(document).ready(function() {
  $('.hexagon').css({'background-image':'url(\'../../images/photos/'+photos[0]+'.jpg\')'});
  var i = 1;
  setInterval(function() {
    $('.hexagon').css({'background-image':'url(\'../../images/photos/'+photos[i]+'.jpg\')'});
    i++;
    if (i >= photos.length) i = 0;
  }, 5000);
});
