$(document).ready(function(){
  toggle();
  tabs();
  popup();
})

function toggle() {  
  $('.js-toggle-link').on('click', function () {   
    $(this).toggleClass('is-active');
    $(this).parents('.js-toggle').find('.js-toggle-content').slideToggle(300);
  });
  
}
 
function tabs() {
  $('.js-tab-link').click(function () {
      // link       
      $('.js-tab-link').removeClass('is-active');
      $(this).addClass('is-active');
      // content
      $('.js-panel').hide();
      var panel = '#' + $(this).attr('data-toggle-target');
      $(panel).fadeIn(500);
      return false;
  });
}

function popup() {
  //open
  $('.js-popup-link').click(function () {
    // link       
    $('.js-popup-link').removeClass('is-active');
   
    // content
    $('.js-popup').removeClass('is-active');
    var panel = '#' + $(this).attr('data-popup');
    $(panel).addClass('is-active');
    return false;
  });
  //close
  $('.js-close').on('click', function () {   
    $('.js-popup').removeClass('is-active');
  });
}
