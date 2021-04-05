// On every anchor click
$('body').on('click', 'a', function(e) {
  var linkText = $(this).text();
      href = $(this).attr('href');
    ga('send', 'event', linkText, 'a-link-click', href, null)
});
