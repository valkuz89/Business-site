var mixer = mixitup('.container-filter');
// container-filter is a div class in which photos puted in

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        //ниже сохраним значение атрибута href в перем-й;
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});