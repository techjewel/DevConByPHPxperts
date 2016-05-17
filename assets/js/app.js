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




// jQuery Smooth Scrolling Internal Links
// credit: https://gist.github.com/nathos/2511377
jQuery(function($) {
    var scrollElement = 'html, body';
    $('html, body').each(function () {
        var initScrollTop = $(this).attr('scrollTop');
        $(this).attr('scrollTop', initScrollTop + 1);
        if ($(this).attr('scrollTop') == initScrollTop + 1) {
            scrollElement = this.nodeName.toLowerCase();
            $(this).attr('scrollTop', initScrollTop);
            return false;
        }
    });

    // Smooth scrolling for internal links
    $("a[href^='#']").click(function(event) {
        event.preventDefault();

        var $this = $(this),
            target = this.hash,
            $target = $(target);

        $(scrollElement).stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 300, 'swing', function() {
            window.location.hash = target;
        });

    });

});