
function showMenuDropdown() {
  $('header .container').addClass('dropdown');
}

function hideMenuDropdown() {
  $('header .container').removeClass('dropdown');
}

$(document).ready(function() {
  $('a.hamburger').click(showMenuDropdown);
  $('a.close').click(hideMenuDropdown);
})
