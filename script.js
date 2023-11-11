$(document).ready(function() {

  // Circle hover
  $(document).on('mouseenter', '.circle', function() {
    $('.circle').not(this).css('opacity', '0.5');
    $(this).append('<p class="label">' + $(this).attr('class').split(' ')[1] + '</p>');
  });

  $(document).on('mouseleave', '.circle', function() {
    $('.circle').css('opacity', '1');
    $('.label').remove();
  });

  // Circle click
  $(document).on('click', '.circle', function() {
    const circle = $(this);
    const color = circle.attr('class').split(' ')[1];

    // Reset opacity
    $('.circle').css('opacity', '1');

    // Move circle to square row
    $('.square-row').append('<div class="square ' + color + '"></div>');
    circle.remove();
  });

  // Square hover
  $(document).on('mouseenter', '.square', function() {
    $('.circle, .square').not(this).css('opacity', '0.5');
    $(this).append('<p class="label above">' + $(this).attr('class').split(' ')[1] + '</p>');
  });

  $(document).on('mouseleave', '.square', function() {
    $('.circle, .square').css('opacity', '1');
    $('.label').remove();
  });

  // Square click
  $(document).on('click', '.square', function() {
    const square = $(this);
    const color = square.attr('class').split(' ')[1];

    // Reset opacity
    $('.circle, .square').css('opacity', '1');

    // Move square to circle row
    $('.circle-row').prepend('<div class="circle ' + color + '"></div>');
    square.remove();
  });

});
