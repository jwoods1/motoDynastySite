// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require twitter/bootstrap

$(document).ready(function(){
	$('#media').carousel({
    pause: true,
    interval: false,
  });
	(function ($) {
    $.fn.extend({
        tableAddCounter: function (options) {

            // set up default options 
            var defaults = {
                title: '#',
                start: 1,
                id: false,
                cssClass: false
            };

            // Overwrite default options with user provided
            var options = $.extend({}, defaults, options);

            return $(this).each(function () {
                // Make sure this is a table tag
                if ($(this).is('table')) {

                    // Add column title unless set to 'false'
                    if (!options.title) options.title = '';
                    $('th:first-child, thead td:first-child', this).each(function () {
                        var tagName = $(this).prop('tagName');
                        $(this).before('<' + tagName + ' rowspan="' + $('thead tr').length + '" class="' + options.cssClass + '" id="' + options.id + '">' + options.title + '</' + tagName + '>');
                    });

                    // Add counter starting counter from 'start'
                    $('tbody td:first-child', this).each(function (i) {
                        $(this).before('<td>' + (options.start + i) + '</td>');
                    });

                }
            });
        }
    });
})(jQuery);

$(document).ready(function () {
    $('.table').tableAddCounter();
    $.getScript("http://code.jquery.com/ui/1.9.2/jquery-ui.js").done(function (script, textStatus) { $('tbody').sortable();$(".alert-info").alert('close');$(".alert-success").show(); });
});
});