$(document).ready(function(){

    // BURGER
    $('.toggle-mnu').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.main-mnu').removeClass('nav-active');
        } else {
            $(this).addClass('on');
            $('.main-mnu').addClass('nav-active');
        }

    });

    // TABS
    $('.tablink').click(function (event) {

        $('.tablink').removeClass('active');
        $(this).addClass('active');

        var tabName = $(this).data('tab');
        $('.tabcontent').removeClass('active');
        $('#'+tabName).addClass('active');
    });

});


