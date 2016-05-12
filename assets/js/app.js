jQuery(document).ready(function($){

    $.getJSON( "data/speakers.json", function( json ) {
        initSpeakers(json);
    });

    $.getJSON( "data/sponsors.json", function( json ) {
        initSponsors(json);
        //console.log(json);
    });


    var initSpeakers = function(speakers) {
        // Grab the template script
        var theSpeakersHandle = $("#handlebar_speakers").html();
        // Compile the template
        var theSpeakersCompile = Handlebars.compile(theSpeakersHandle);

        // Define our data object
        var contex = speakers;

        // Pass our data to the template
        var theSpeakersHtml = theSpeakersCompile(contex);

        // Add the compiled html to the page
        $('#speakers_block').html(theSpeakersHtml);

    };

    var initSponsors = function(sponsors) {

        // Grab the template script
        var theSponsorsHandle = $("#handlebar_sponsors").html();
        // Compile the template
        var theSpeakersCompile = Handlebars.compile(theSponsorsHandle);

        // Define our data object
        var contex = sponsors;
        // Pass our data to the template
        var theSponsorsHtml = theSpeakersCompile(contex);

        // Add the compiled html to the page
        $('#sponsors_block').html(theSponsorsHtml);
    };

    var $navigation = $('nav.navbar');

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 100) {
            $navigation.addClass('scrolled');
        } else {
            $navigation.removeClass('scrolled');
        }
    });

});