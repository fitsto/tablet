/* function loadPage(url) {
    alert(1);
    var loader = $('#page_loader');

    $(loader).load('assets/pages/digitalizate/' + url, function(responseTxt, statusTxt, xhr) {
        //alert(1);
        if (statusTxt === "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
            //alert(statusTxt);
        }

    });
} */

/* function loadEmprendePage(url) {
    var loaderEmprende = $('#page_emprende_loader');

    $(loaderEmprende).load('assets/pages/emprende/' + url, function(responseTxt, statusTxt, xhr) {

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
} */