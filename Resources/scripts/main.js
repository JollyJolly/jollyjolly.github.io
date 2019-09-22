
function showMenuDropdown() {
  $('header .container').addClass('dropdown');
}

function hideMenuDropdown() {
  $('header .container').removeClass('dropdown');
}

$(document).ready(function() {
  $('button.hamburger').click(showMenuDropdown);
  $('button.close').click(hideMenuDropdown);
})
