var bootstrapHalfCss = '';
var bootstrapFullCss = '';
var bootstrapCss = '';

var bootstrapHalfJs = '';
var bootstrapFullJs = '';
var bootstrapJs = '';

$(document).ready(function () {

    bootstrapHalfCss = $('#bootstrap-css').attr('href').replace('main', 'main-backend-half');
    bootstrapFullCss = $('#bootstrap-css').attr('href').replace('main', 'main-backend-full');
    bootstrapCss = $('#bootstrap-css').attr('href');

    bootstrapHalfJs = $('#bootstrap-js').attr('href').replace('bootstrap', 'bootstrap-backend-half');
    bootstrapFullJs = $('#bootstrap-js').attr('href').replace('bootstrap', 'bootstrap-backend-full');
    bootstrapJs = $('#bootstrap-js').attr('href');

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
        $('#bootstrap-js').attr('href', bootstrapHalfJs);

    } else if (right > 0 && left == 0) {

        $('#bootstrap-css').attr('href', bootstrapHalfCss);
        $('#bootstrap-js').attr('href', bootstrapHalfJs);

    } else if (left > 0 && right > 0) {

        $('#bootstrap-css').attr('href', bootstrapFullCss);
        $('#bootstrap-js').attr('href', bootstrapFullJs);

    } else if (right == 0 && left == 0) {

        $('#bootstrap-css').attr('href', bootstrapCss);
        $('#bootstrap-js').attr('href', bootstrapJs);

    }

}