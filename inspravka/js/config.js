require.config({
    baseUrl: "",
    paths: {
        jquery: "/components/jquery/jquery.min",
        bootstrap: "/components/bootstrap/js/bootstrap.min",
        datepicker: "/components/bootstrap-datepicker/bootstrap-datepicker-built",
        datepicker_ru: "/components/bootstrap-datepicker/js/locales/bootstrap-datepicker.ru",
        select2: "/components/select2/dist/js/select2",
        select2_ru: "/components/select2/dist/js/i18n/ru",
        cabinet: "/application/cabinet/js",
        main_bundle: "/application/main/js",
        main: "/js",
        bootbox: "/components/bootbox/bootbox",
        form_validator: "//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min",
        tinymce:"/components/tinymce/tinymce.min",
        typeahead: "/components/bootstrap-3-typeahead/bootstrap3-typeahead",
        react: "https://unpkg.com/react@15/dist/react.min",
        react_dom: "https://unpkg.com/react-dom@15/dist/react-dom.min"
    },
    shim: {
        'cabinet/sb-admin-2': ["jquery"],
        bootstrap: ["jquery"],
        datepicker: ["bootstrap"],
        datepicker_ru: ["datepicker"],
        select2: ["jquery"],
        select2_ru: ["select2"],
        bootbox: ["jquery"],
        'main_bundle/message-form':['form_validator'],
        typeahead: ['bootstrap']
    }
});
