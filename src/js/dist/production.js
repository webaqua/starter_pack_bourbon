$(document).ready(function(){

                $('#slider_item_1_menu').mouseover(function(){
                    slider_action_remove(last_pos);
                    var e = $(this).attr('id');
                    slider_action_on(e);
                    last_pos = 1;
                });

                $('#slider_item_1_menu').mouseleave(function(){
                    var e = $(this).attr('id');
                    slider_action_off(e);
                });

                $('#slider_item_2_menu').mouseover(function(){
                    slider_action_remove(last_pos);
                    var e = $(this).attr('id');
                    slider_action_on(e);
                    last_pos = 2;
                });

                $('#slider_item_2_menu').mouseleave(function(){
                    var e = $(this).attr('id');
                    slider_action_off(e);
                });

                $('#slider_item_3_menu').mouseover(function(){
                    slider_action_remove(last_pos);
                    var e = $(this).attr('id');
                    slider_action_on(e);
                    last_pos = 3;
                });

                $('#slider_item_3_menu').mouseleave(function(){
                    var e = $(this).attr('id');
                    slider_action_off(e);
                });

                function slider_action_on(e){
                    $('#'+e).addClass('menuitem_active');
                    var et = e.replace('_menu','');
                    $('#'+et).addClass('slider_item_active');
                    $('#video').addClass('backblur');
                }

                function slider_action_off(e){
                    $('#video').removeClass('backblur');
                }

                function slider_action_remove(sl_pos){
                    $('#slider_item_'+sl_pos+'_menu').removeClass('menuitem_active');
                    $('#slider_item_'+sl_pos).removeClass('slider_item_active');
                }
            })

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc2xpZGVyX2l0ZW1fMV9tZW51JykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyX2FjdGlvbl9yZW1vdmUobGFzdF9wb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlcl9hY3Rpb25fb24oZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9wb3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3NsaWRlcl9pdGVtXzFfbWVudScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJfYWN0aW9uX29mZihlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzbGlkZXJfaXRlbV8yX21lbnUnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJfYWN0aW9uX3JlbW92ZShsYXN0X3Bvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyX2FjdGlvbl9vbihlKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0X3BvcyA9IDI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc2xpZGVyX2l0ZW1fMl9tZW51JykubW91c2VsZWF2ZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlcl9hY3Rpb25fb2ZmKGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3NsaWRlcl9pdGVtXzNfbWVudScpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlcl9hY3Rpb25fcmVtb3ZlKGxhc3RfcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJfYWN0aW9uX29uKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfcG9zID0gMztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzbGlkZXJfaXRlbV8zX21lbnUnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyX2FjdGlvbl9vZmYoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbGlkZXJfYWN0aW9uX29uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnK2UpLmFkZENsYXNzKCdtZW51aXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXQgPSBlLnJlcGxhY2UoJ19tZW51JywnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycrZXQpLmFkZENsYXNzKCdzbGlkZXJfaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjdmlkZW8nKS5hZGRDbGFzcygnYmFja2JsdXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbGlkZXJfYWN0aW9uX29mZihlKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjdmlkZW8nKS5yZW1vdmVDbGFzcygnYmFja2JsdXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbGlkZXJfYWN0aW9uX3JlbW92ZShzbF9wb3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzbGlkZXJfaXRlbV8nK3NsX3BvcysnX21lbnUnKS5yZW1vdmVDbGFzcygnbWVudWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NsaWRlcl9pdGVtXycrc2xfcG9zKS5yZW1vdmVDbGFzcygnc2xpZGVyX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiJdfQ==
