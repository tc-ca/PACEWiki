$(document).ready(function () {

    //$('#def-top').load('wiki-head.html');
    //$('#def-template').load('tc-template.html');

    normalizeInfoBox();

    'use strict';
    $.urlParam = function (name) {
        var results = new RegExp('[?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
        if (results) {
            return results[1];
        }
    }

    $(window).resize(function () {
        normalizeInfoBox();
    });


    // test for info box2
    var infoxBox2Height = 0;

    $('.info-box2').each(function (i, obj) {


        var currentHeight = $(this).height();

        if (currentHeight > infoxBox2Height) {
            infoxBox2Height = currentHeight;
        }


    });

    $('.info-box2').css('height', infoxBox2Height + 'px');


    // end test for info box2


    var pageLang = $.urlParam('lang') || 'en';

    var languageToggle = $('#language-toggle');
    if (pageLang === 'en') {
        languageToggle.text('Français');
        languageToggle.attr("href", "?lang=fr");
    } else {
        languageToggle.text('English');
        languageToggle.attr("href", "?lang=en");
    }

    $("multilang").each(function () {
        if ($(this).find('en').length) {
            var english = $(this).find('en');
            var french = $(this).find('fr');
            $(this).html(pageLang === 'en' ? english : french);
        } else {
            var text = $(this).text();
            var arr = text.split('@');
            var english = arr[1].replace('en|', '').trim();
            var french = arr[2].replace('fr|', '').trim();
            $(this).replaceWith(pageLang === 'en' ? english : french);
        }
    });

    $('[src-en]').each(function () {
        var img = $(this);
        img.attr('src', pageLang === 'en' ? img.attr('src-en') : img.attr('src-fr'));
    })

    function normalizeInfoBox() {
        var maxHeight = 0;

        $(".info-box").each(function () {

            if ($(this).height() > maxHeight) { maxHeight = $(this).innerHeight(); }
        });

        //$(".info-box").height(maxHeight);

    }
});




