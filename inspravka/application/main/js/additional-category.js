/**
 * Created by serg on 25.10.16.
 */
define(['jquery'], function ($) {

    function loadAdditionalCategory() {

        var container = $(this).closest('li');
        var containerCategories = container.parent();

        $(this).tooltip('destroy');
        $(this).hide();
        container.find("span").show();

        $.get($(this).data('url'),function(response){
            container.remove();
            containerCategories.append(response);
        });
    }

    $('[role=additional-category]').click(loadAdditionalCategory);
})
