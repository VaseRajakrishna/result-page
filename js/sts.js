$('.btn').click(function() {
    var _stsVal = $("#quantity").val();
    if (_stsVal == 1) {
        $('.slider-ctnt').removeClass('medium');
        $('.slider-ctnt').removeClass('high');
        $('.slider-ctnt').addClass('lower');
    } else if (_stsVal == 2) {
        $('.slider-ctnt').removeClass('lower');
        $('.slider-ctnt').removeClass('high');
        $('.slider-ctnt').addClass('medium');
    } else if (_stsVal == 3) {
        $('.slider-ctnt').removeClass('lower');
        $('.slider-ctnt').removeClass('medium');
        $('.slider-ctnt').addClass('high');
    } else if (_stsVal == "") {
        alert('Enter value');
    }
});
$('.try-btn').click(function() {
    $('.slider-ctnt').removeClass('lower');
    $('.slider-ctnt').removeClass('high');
    $('.slider-ctnt').removeClass('medium');
})