define( ['jquery', 'main/functions', 'select2_ru', 'typeahead'], function ( $, fn ) {
    fn.animateSubmit();

    // animate search form
    $( "form[role=main-search-form]" ).submit( function () {
        fn.animateButton( $( this ).find( '[type="submit"]' ) );
    } );

    // typeahead
    $( "form[role=main-search-form] input:text" ).typeahead( {
        source: function ( query, process ) {
            if (query.length > 2) {
                return $.getJSON( this.$element.data( 'path' ), {q: query}, function ( response ) {
                    return process( response );
                } );
            }
        },
        // autoSelect: true
        displayText: function ( item ) {
            return item.text;
        }
        // highlighter: function (item) {
        //     return item + " <sub>123</sub>";
        // }
    } );

    // init towns ----------------------------------------------------------------
    $.fn.initTowns = function () {
        var self = $( this );
        var selectRegions = self.find( "select" );

        $( this ).find( "[role=select-other-towns]" ).click( function () {
            var dropdownRegion = $( this ).closest( "div" ).find( "[data-toggle='dropdown']" ).addClass( "ajax-loader" ).addClass( "disabled" ).text( $( this ).text() );
            $.get( selectRegions.data( 'url' ), function ( data ) {
                selectRegions.show();
                dropdownRegion.parent().hide();
                // selectRegions.select2( {
                //     data: data,
                //     dropdownCssClass: "droptowns"
                // } );
                // selectRegions.select2( "open" );
                selectRegions.select2({data: data, theme: "bootstrap", element: '[role=container-towns] button'});

            } )
        } );

        // selectRegions.on( "change", function ( e ) {
        //     var templateUrl = selectRegions.data( "location" );
        //     var location = e.added.slug !== undefined ? templateUrl.replace( '__town__', e.added.slug ) : templateUrl.replace( /__town__\/?/, "" );
        //     window.location = location;
        // } );

        selectRegions.on( "select2:select", function ( e ) {
            var templateUrl = selectRegions.data( "location" );
            var location = e.params.data !== undefined ? templateUrl.replace( '__town__', e.params.data.slug ) : templateUrl.replace( /__town__\/?/, "" );
            window.location = location;
        } );


    };

    $( "[role=container-towns]" ).initTowns();

    // tooltip
    $( '[role=element-tooltip], .element-tooltip' ).tooltip( {
        container: 'body'
    } );

    // breadcrumb responsive
    $.fn.breadcrumbResponsive = function () {
        var lastElement = this.find( "li:last-child" );
        var lastWidth = lastElement.width();
        this.find( "li:not(:first-child, :last-child)" ).hover( function () {
            $( this ).css( {width: $( this ).find( "a" ).width() + 30 + "px"} );
            lastElement.css( {width: '70px'} );
        }, function () {
            $( this ).css( {width: '70px'} );
            lastElement.css( {width: lastWidth} );
        } );
    };

    $( "[role=breadcrumb-responsive]" ).breadcrumbResponsive();

    // banner click
    // $( "iframe[role=banner-top-right]" ).each( function () {
    //     $( this ).contents().find( "body" ).css( {cursor: "pointer"} );
    //     // $( this ).contents().click( {frame: this}, goToClientSite );
    // } )
    //
    // function goToClientSite( e ) {
    //     location.href = $( e.data.frame ).data( 'url' );
    // }

    window.addEventListener("message", function (e) {
        // window.open(e.data.goTo, '_blank');
        if (e.data.goTo) {
            location.href = e.data.goTo;
        }
    })

    // save statistic
    var dataStatisticSearch = $("#statistic-container").data("statistic-search");
    dataStatisticSearch && $.post(dataStatisticSearch.url, dataStatisticSearch.data);

} );
