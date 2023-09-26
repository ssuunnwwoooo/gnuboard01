$(function () {
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        vertical: true,
    });
    // () 함수 {}객체 []배열

    $('.mopen').on('click', function () {
        $('#gnb').toggleClass('on')
    })
});
