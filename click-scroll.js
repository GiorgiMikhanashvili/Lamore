//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4];

$.each(sectionArray, function(index, value) {
    var sectionId = 'section_' + value;
    var sectionElement = $('#' + sectionId);

    // Check if the section element exists before using it
    if (sectionElement.length > 0) {
        $(document).scroll(function() {
            var offsetSection = sectionElement.offset().top - 154;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }
        });

        $('.click-scroll').eq(index).click(function(e) {
            console.log('Clicked section index:', index);
            console.log('Section element:', sectionElement);
            var offsetClick = sectionElement.offset().top - 154;
            e.preventDefault();
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300);
        });
    } else {
        console.log('Section with ID ' + sectionId + ' not found.');
    }
});

$(document).ready(function() {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
