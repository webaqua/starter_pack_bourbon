$(document).ready(function(){
  $(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

/* if in tab mode */

$(".js-vertical-tab").click(function(event) {
event.preventDefault();

$(".js-vertical-tab-content").hide();
var activeTab = $(this).attr("rel");
$("#"+activeTab).show();

$(".js-vertical-tab").removeClass("is-active");
$(this).addClass("is-active");

$(".js-vertical-tab-accordion-heading").removeClass("is-active");
$(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
});

/* if in accordion mode */

$(".js-vertical-tab-accordion-heading").click(function(event) {
event.preventDefault();

$(".js-vertical-tab-content").hide();
var accordion_activeTab = $(this).attr("rel");
$("#"+accordion_activeTab).show();

$(".js-vertical-tab-accordion-heading").removeClass("is-active");
$(this).addClass("is-active");

$(".js-vertical-tab").removeClass("is-active");
$(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
});


$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
});


$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

            })
