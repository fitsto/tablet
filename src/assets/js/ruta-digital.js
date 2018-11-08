function loadPage(url) {
    var loader = $('#page_loader');

    $(loader).load('assets/pages/' + url, function(responseTxt, statusTxt, xhr) {

        if (statusTxt === "error") {
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        }

    });
}