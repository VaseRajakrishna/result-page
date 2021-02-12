$(document).ready(function() {
    'use strict';
    $('.fade-up, .fade-down, .bounce-in, .flip-in,.fade-in-right,.fade-in-left').addClass('no-display');
    $('.bounce-in').one('inview', function() {
        $(this).addClass('animated bounceIn appear');
    });
    $('.flip-in').one('inview', function() {
        $(this).addClass('animated flipInY appear');
    });

    $('.fade-up').one('inview', function() {
        $(this).addClass('animated fadeInUp appear');
    });
    $('.fade-down').one('inview', function() {
        $(this).addClass('animated fadeInDown appear');
    });

    $('.fade-in-left').one('inview', function() {
        $(this).addClass('animated fadeInLeft appear');
    });
    $('.fade-in-right').one('inview', function() {
        $(this).addClass('animated fadeInRight appear');
    });

});