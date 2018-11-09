function loadPage(url) {
    var loader = $('#page_loader');

    $(loader).load('assets/pages/digitalizate/' + url, function(responseTxt, statusTxt, xhr) {

        if (statusTxt === "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }

    });
}

function loadEmprendePage(url) {
    var loader = $('#page_emprende_loader');

    $(loader).load('assets/pages/emprende/' + url, function(responseTxt, statusTxt, xhr) {

        var window_width = $(window).width();
        setTimeout(function() {
            $('.steps li.active').each(function(i, e) {
                $(this).fadeTo(0, 0).delay(300 * i).fadeTo(300, 1);
            });

            $('body').fadeIn();

            if (window_width <= 768) {
                normalizeHeight($('.steps li'));
            }
        }, 300);

        if (statusTxt === "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }

    });
}

$(document).on('click', 'page-ruta-emprende a', function(evt) {
    var url = $(evt.currentTarget).attr('href');
    if (!url) return;
    if (url.indexOf('www') > -1) return;
    evt.preventDefault();
    if (url.indexOf('#') > -1) return;
    loadEmprendePage(url);
});

function checkInput(input, event = null) {
    var value = $(input).val();
    var resp;

    if (value !== '' || value.length > 0) {
        // Si se ingreso algo

        if ($(input).is(':invalid')) {
            // si es invalido
            $(input).removeClass('valid');
            $(input).addClass('invalid');
            $(input).parent().parent().addClass('invalid');
            resp = false;
        } else {
            // Si es correcto
            $(input).addClass('valid');
            $(input).removeClass('invalid');
            $(input).parent().parent().removeClass('invalid');
            resp = true;
        }
    } else {
        // Si no se ingreso nada
        if (event !== false) {
            $(input).parent().parent().addClass('invalid');
            $(input).removeClass('valid');
            $(input).removeClass('invalid');
            resp = false;
        }
    }

    return resp;
}

function normalizeHeight(items) {
    $(items).each(function(i, e) {
        var width = $(e).width();
        console.log(width);
        if (width !== 0) {
            $(e).css('height', width + 'px');
        }
    });
}

$(window).resize(function() {
    normalizeHeight($('.steps li'));
});


$(document).on('click', 'page-ruta-emprende .dropdown-header', function(e) {
    e.preventDefault();

    var parent = $(this).parent();
    var content = $('.dropdown-content', parent);

    if ($(content).is(':visible')) {
        $(content).slideUp(function() {
            $(parent).removeClass('active');
        });
    } else {
        $('.dropdown-content').slideUp();
        $(content).slideDown(function() {
            $('.dropdown').removeClass('active');
            $(parent).addClass('active');
        });
    }
});

/*$(document).on('click', 'page-ruta-emprende .faded-link, .footer-fixed .botonNew', function(evt) {
    event.preventDefault();
    var href = $(this).attr('href');

    if (href !== '#' && href !== '' && href !== 'undefined') {
        // Si no está vacío o el #
        $('body').fadeOut(function() {
            setTimeout(function() {
                window.location = href;
            }, 100);
        });
    }
});*/

$(document).on('click', 'page-ruta-emprende .return-false', function(e) {
    e.preventDefault();
});

$(document).on('click', 'page-ruta-emprende .formulario input[type="submit"]', function(e) {
    e.preventDefault();
    var valid;

    $('.formulario input').each(function(i, e) {
        var input = e;
        var type = $(input).attr('type');

        if (type !== 'submit' && type !== 'hidden') {
            if (checkInput($(input)) === true) {
                valid = true;
            } else {
                valid = false;
            }
        }
    });

    if (valid === true) {
        $('.formulario').submit();
    }
});