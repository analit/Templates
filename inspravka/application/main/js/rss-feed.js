define(['jquery', 'rss_path'], function ($, url) {
    var rss = $(".rss-content");
    rss.show();
    rss.load(url,function (response, status) {
        if (status == 'error') {
            rss.html($('<span>', {class: 'text-muted small', text: "Ошибка при загрузке новостей."}));
            return;
        }
    })
})
