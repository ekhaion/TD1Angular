jQuery(function ($) {
  $(".sidebar-dropdown > a").clickOn(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  $("#close-sidebar").clickOn(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").clickOn(function () {
    $(".page-wrapper").addClass("toggled");
  });
});