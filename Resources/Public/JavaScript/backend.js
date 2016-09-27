var bootstrapHalfCss = '';
var bootstrapFullCss = '';
var bootstrapCss = '';

$(document).ready(function () {

    bootstrapHalfCss = $('#bootstrap-css').attr('href').replace('main', 'main-backend-half');
    bootstrapFullCss = $('#bootstrap-css').attr('href').replace('main', 'main-backend-full');
    bootstrapCss = $('#bootstrap-css').attr('href');

    $('body').on('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function(event) {

        if (event.target.localName == 'body') {

            changeBootstrap();

        }

    });

});

var changeBootstrap = function() {

    var left = $('body').css('marginLeft').replace('px', '');
    var right = $('body').css('marginRight').replace('px', '');

    if (left > 0 && right == 0) {

        $('#bootstrap-css').attr('href', bootstrapHalfCss);

    } else if (right > 0 && left == 0) {

        $('#bootstrap-css').attr('href', bootstrapHalfCss);

    } else if (left > 0 && right > 0) {

        $('#bootstrap-css').attr('href', bootstrapFullCss);

    } else if (right == 0 && left == 0) {

        $('#bootstrap-css').attr('href', bootstrapCss);

    }

}
