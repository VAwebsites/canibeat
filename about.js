$(document).ready(function () {
    $('.about').on('click', function() {
        var x = $('.section-header').position();
        window.scrollTo(x.left, x.top);
    });
});
