function loadPage(url) {
    var loader = $('#page_loader');

    $('body').fadeOut(function() {
        $(loader).load('assets/pages/' + url, function(responseTxt, statusTxt, xhr) {

            $('body').fadeIn();

            if (statusTxt === "error") {
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
            }

        });
    });
}