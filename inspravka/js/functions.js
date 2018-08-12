define(function (require) {
    var $ = require('jquery');

    $.fn.animateButton = function () {
        this.addClass('progress-bar-striped').addClass('loading').addClass('btn-primary');
    }

    $.fn.unAnimateButton = function () {
        this.removeClass('progress-bar-striped').removeClass('loading').removeClass('btn-primary');
    }

    

    return {
        animateSubmit: function () {
            __this = this;
            $('[type="submit"]').not('.not-animate').click(function () {
                __this.animateButton($(this));
            });
        },
        animateButton: function (button) {
            button.addClass('progress-bar-striped').addClass('loading').addClass('btn-primary');
        },
        unAnimateButton: function (button) {
            button.removeClass('progress-bar-striped').removeClass('loading').removeClass('btn-primary');
        },
        datepicker: function () {
            require('datepicker_ru');
            $("[role='datepicker']").datepicker({
                format: 'dd.mm.yyyy',
                autoclose: true,
                language: 'ru',
                endDate: "current"
            });
        }
    };
});
