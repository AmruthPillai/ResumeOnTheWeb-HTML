// Preload Images
$.fn.preload = function() {
    this.each(function(){
        $('<img />')[0].src = 'http://cdn.amruthpillai.com/images/photos/' + this + '.jpg';
    });
}

const photos = ['IMG_3522', 'IMG_1880', 'IMG_8295', 'IMG_5184', 'IMG_8286', 'IMG_4861'];

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $('#english-percircle').percircle({
    progressBarColor: '#d9534f',
    text: 'English',
    percent: 100
  });

  $('#tamil-percircle').percircle({
    progressBarColor: '#f0ad4e',
    text: 'Tamil',
    percent: 75
  });

  $('#kannada-percircle').percircle({
    progressBarColor: '#5cb85c',
    text: 'Kannada',
    percent: 75
  });

  $('#hindi-percircle').percircle({
    progressBarColor: '#5bc0de',
    text: 'Hindi',
    percent: 50
  });

  // window.ScrollReveal().reveal('.section', { origin: 'top' });

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

// Medium RSS to JSON
$(function() {
  var $blog_content = $('#blog-content');
  var data = { rss_url: 'https://medium.com/feed/amruth-pillai/' };

  $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
    if (response.status == 'ok') {
      var output = '<ul class="list-group">';
      $.each(response.items, function(k, item) {
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL

        var trimmedTitle = item.title.substr(0, 100); //trim the string to the maximum length
				trimmedTitle = trimmedTitle.substr(0, Math.max(trimmedTitle.length, trimmedTitle.lastIndexOf(" "))); //re-trim if we are in the middle of a word

        output += '<a href="' + item.link + '"target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">\
            <div class="d-flex w-100 justify-content-between">\
              <img class="blog-image" src="' + src + '" />\
              <span class="blog-title">' + trimmedTitle + '&nbsp;&nbsp;<small><i class="fa fa-external-link" aria-hidden="true"></i></small></span>\
              <small class="blog-date">' + jQuery.format.date(item.pubDate, "d MMM \''yy") + '</small>\
            </div>\
          </a>';
        return k < 4;
      });
      output += '</ul>';
      $blog_content.html(output);
    }
  });
});

$(function() {
  var $instagram_content = $('#instagram-content');

  $.ajax({
    url: 'https://igapi.ga/amruthpillai/media/',
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(response) {
      var output = '';
      $.each(response.items, function(k, item) {
        output += '<div class="insta-box"><a href="' + item.link + '" target="_blank"><img src="' + item.images.thumbnail.url + '" /></a></div>';
        return k < 7;
      });
      $instagram_content.html(output);
    }
  });
});
