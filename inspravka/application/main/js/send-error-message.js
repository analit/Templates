define(['jquery', 'main/functions'], function ($, fn) {
    var formTemplate = $("#send-error-message-form").html();

    $('[data-action=send-error-message]').click(function () {
        var containerMenu = $(this).closest(".container-menu");
        var popover = containerMenu.find(".popover");
        if (popover.length) {
            popover.toggle();
            return;
        }
        containerMenu.append(formTemplate);

        // popover form cancel button
        containerMenu.find("form button[type=button]").click(function () {
            containerMenu.find(".popover").hide();
        })

        // init form
        var form = containerMenu.find(".popover form");
        form.attr('action', $(this).data("action-form"));

        form.submit(function () {
            var popoverContainer = form.parent();
            fn.animateButton(form.find('[type=submit]'));
            $.post($(this).attr("action"), form.serialize(), function (response) {

                fn.unAnimateButton(form.find('[type=submit]'));

                form.find(".has-error ul").remove();
                form.find(".has-error").removeClass('has-error');

                if (response.status == "success") {
                    form.remove();
                    popoverContainer.append($("<div>", {class: "alert alert-success", text: response.message}));
                } else {
                    popoverContainer.find("textarea").parent().addClass("has-error");
                    var errorsList = $("<ul>");
                    response.messages.forEach(function (message) {
                        errorsList.append($("<li>", {text:message}));
                    });
                    popoverContainer.find("textarea").before(errorsList);
                }
            })
            return false;
        });
    });
});
