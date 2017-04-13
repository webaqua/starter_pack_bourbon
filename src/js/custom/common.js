$(document).ready(function(){
  if ($(window).width() < 768) {
    $('.grid-item-services-last').insertBefore('.grid-item-services-first');
    $('.grid-item-addservices-last').insertBefore('.grid-item-addservices-first');
    // $('.side-last').append($('.side-first'));
  }

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

  var glide = $('.slider').glide().data('api_glide');
	$(window).on('keyup', function (key) {
	if (key.keyCode === 13) {
	glide.jump(3, console.log('Wooo!'));
	};
	});
	$('.slider-arrow').on('click', function() {
	console.log(glide.current());
	});
        myCarousel = function(){
        var carousel = {
            containerCarousel: document.querySelector('.carousel'),
            listCarousel: document.querySelectorAll('.carousel li'),
            itemCarousel: [],
            countLeft: 0,
            countRight: 0,
            maxHeigth: 0,
            pagination: document.createElement('div')
        }

        function moveLeft() {
            var left = document.querySelector('.left');
            var center = document.querySelector('.center');
            var right = document.querySelector('.right');

            left.innerHTML = carousel.itemCarousel[carousel.countLeft++];
            if (carousel.countLeft === carousel.itemCarousel.length) carousel.countLeft = 0;

            carousel.countRight++;
            if (carousel.countRight === carousel.itemCarousel.length) carousel.countRight = 0;

            center.className = 'left';
            right.className = 'center';
            left.className = 'right first';
        }

        function moveRight() {
            var left = carousel.containerCarousel.querySelector('.left');
            var center = carousel.containerCarousel.querySelector('.center');
            var right = carousel.containerCarousel.querySelector('.right');

            right.innerHTML = carousel.itemCarousel[carousel.countRight--];
            if (carousel.countRight == -1) carousel.countRight = carousel.itemCarousel.length - 1;

            carousel.countLeft--;
            if (carousel.countLeft === -1) carousel.countLeft = carousel.itemCarousel.length - 1;

            center.className = 'right';
            left.className = 'center';
            right.className = 'left first';
        }

        function buildCarousel() {

            if (carousel.listCarousel.length > 2) {
                if (carousel.listCarousel.length === 3) {
                    carousel.countLeft = 0;
                    carousel.countRight = 2;
                } else {
                    carousel.countLeft = 3;
                    carousel.countRight = carousel.listCarousel.length - 1;
                }

                for (var i = carousel.listCarousel.length - 1; i >= 0; i--) {
                    if (carousel.maxHeigth < carousel.listCarousel[i].offsetHeight) carousel.maxHeigth = carousel.listCarousel[i].offsetHeight;
                    carousel.itemCarousel[i] = carousel.listCarousel[i].innerHTML;
                    carousel.listCarousel[i].remove();
                }

                for (var j = 2; j >= 0; j--) {
                    carousel.containerCarousel.appendChild(carousel.listCarousel[j]);
                }
                carousel.listCarousel[0].className = 'left';
                carousel.listCarousel[1].className = 'center';
                carousel.listCarousel[2].className = 'right';

                carousel.containerCarousel.style.height = carousel.maxHeigth + 'px';

                addPaginator();
            }
        }

        function addPaginator() {
            var btnLeft = document.createElement('div'),
                btnRight = document.createElement('div');

            btnLeft.className = 'left-btn';
            btnLeft.onclick = moveLeft;

            btnRight.onclick = moveRight;
            btnRight.className = 'right-btn';

            carousel.pagination.className = 'paginator';
            carousel.pagination.appendChild(btnLeft);
            carousel.pagination.appendChild(btnRight);

            carousel.containerCarousel.parentNode.appendChild(carousel.pagination);
        }

        function start() {
            buildCarousel();
            setInterval(moveLeft, 10000000);
        }

        start();
    }

    myCarousel();
    var bittersMap = (function () {
    var myLatlng = new google.maps.LatLng(51.089709, 71.447923),
    mapCenter = new google.maps.LatLng(51.089709, 71.447923),
    mapCanvas = document.getElementById('map_canvas'),
    mapOptions = {
    center: mapCenter,
    zoom: 13,
    scrollwheel: false,
    draggable: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(mapCanvas, mapOptions),
    contentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
    '<div id="bodyContent"'+
    '<p>Sveavägen 98</p>'+
    '</div>'+
    '</div>',
    infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
    }),
    marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'thoughtbot (Sweden)'
    });
    return {
    init: function () {
    map.set('styles', [{
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
    { hue: '#ffff00' },
    { saturation: 30 },
    { lightness: 10}
    ]}
    ]);
    google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map,marker);
    });
    }
    };
    }());
    bittersMap.init();
})
