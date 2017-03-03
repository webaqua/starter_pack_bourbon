$(document).ready(function() {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKFwiLmpzLXZlcnRpY2FsLXRhYi1jb250ZW50XCIpLmhpZGUoKTtcclxuICAkKFwiLmpzLXZlcnRpY2FsLXRhYi1jb250ZW50OmZpcnN0XCIpLnNob3coKTtcclxuICAvKiBpZiBpbiB0YWIgbW9kZSAqL1xyXG5cclxuICAkKFwiLmpzLXZlcnRpY2FsLXRhYlwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoXCIuanMtdmVydGljYWwtdGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgdmFyIGFjdGl2ZVRhYiA9ICQodGhpcykuYXR0cihcInJlbFwiKTtcclxuICAgICQoXCIjXCIrYWN0aXZlVGFiKS5zaG93KCk7XHJcblxyXG4gICAgJChcIi5qcy12ZXJ0aWNhbC10YWJcIikucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICAgICQoXCIuanMtdmVydGljYWwtdGFiLWFjY29yZGlvbi1oZWFkaW5nXCIpLnJlbW92ZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgJChcIi5qcy12ZXJ0aWNhbC10YWItYWNjb3JkaW9uLWhlYWRpbmdbcmVsXj0nXCIrYWN0aXZlVGFiK1wiJ11cIikuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8qIGlmIGluIGFjY29yZGlvbiBtb2RlICovXHJcblxyXG4gICQoXCIuanMtdmVydGljYWwtdGFiLWFjY29yZGlvbi1oZWFkaW5nXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoXCIuanMtdmVydGljYWwtdGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgdmFyIGFjY29yZGlvbl9hY3RpdmVUYWIgPSAkKHRoaXMpLmF0dHIoXCJyZWxcIik7XHJcbiAgICAkKFwiI1wiK2FjY29yZGlvbl9hY3RpdmVUYWIpLnNob3coKTtcclxuXHJcbiAgICAkKFwiLmpzLXZlcnRpY2FsLXRhYi1hY2NvcmRpb24taGVhZGluZ1wiKS5yZW1vdmVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgJChcIi5qcy12ZXJ0aWNhbC10YWJcIikucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAkKFwiLmpzLXZlcnRpY2FsLXRhYltyZWxePSdcIithY2NvcmRpb25fYWN0aXZlVGFiK1wiJ11cIikuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=
