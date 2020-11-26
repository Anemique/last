document.addEventListener('DOMContentLoaded', () => {
    $('.main-slider2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: false,
        focusOnSelect: true,
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    $('#down-ar').click(function() {
        $('.mobile-menu').css({
            'display' : "block"
        });
        $('.mobile-menu').animate({
            height : "300px"
        },600);
        $('#down-ar').css({
            'display': 'none'
        });
        $('#up-arrow').css({
            'display': 'block',
        });
    });
    $('#up-arrow').click(function() {
        $('.mobile-menu').animate({
            height : '0px'
        },600, "linear", function(){
            $( this ).css("display", "none");
            $('#up-arrow').css('display', 'none');
            $('#down-ar').css('display', 'block');
        });

    });
});