$(function() {
    $('.page-next').hover(
        function() {
            $(this).stop().animate({ width: 100, height: 100 }, 500);
        },
        function() {
            $(this).stop().animate({ width: 50, height: 50 }, 500);
        }
    );
})

$(function() {
    $('.page-back').hover(
        function() {
            $(this).stop().animate({ width: 100, height: 100 }, 500);
        },
        function() {
            $(this).stop().animate({ width: 50, height: 50 }, 500);
        }
    );
})