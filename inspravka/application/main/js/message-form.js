/**
 * Created by sergei on 13.08.16.
 */
define(['main/functions'], function (fn) {
    var myLanguage = {
        errorTitle: 'Ошибка в заполнении формы!',
        requiredFields: 'Все поля должны быть заполнены!',
        badEmail: 'Неправильный адрес электронной почты',
    }


    $.validate({
        lang: 'ru',
        language: myLanguage,
        validateOnBlur: false,
        form: '[role="footer-message-form"]',
        errorMessagePosition: 'top',
        onSuccess: function (formMessage) {
            // var formMessage = $('[role="footer-message-form"]');
            fn.animateButton(formMessage.find("button"));
            $.post(formMessage.attr('action'), formMessage.serialize(), function (response) {
                formMessage.parent().append($("<div>",{class:"alert alert-success", text:"Сообщение отправлено!"}));
                formMessage[0].reset();
                formMessage.remove();
            })
            return false;
        },
        onError : function(formMessage) {
            formMessage.find(".form-error ul").addClass("list-unstyled")
        },
        inputParentClassOnError: false,
        inputParentClassOnSuccess: false

    });
});
