$(document).ready(function() {
  'use strict';

  var $body = $('body');
  var $input = $("#yodaInput");
  var $output = $("#output");
  var $loader = $(".loader");
  var $modal = $('.modal');
  var $modalImgHolder = $('.modal-img-holder')

  $(".textProcess").click(function(){
    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        headers: {
          'X-Mashape-Key': '2inxRE3sMwmshPsgLkg5ruB0PZ93p1cTXBNjsnpRsw1mnMnGJ7', 'Accept': 'text/plain'
        },
        type: 'GET', // The HTTP Method
        data: {
          sentence: $input.val()
        }, // Additional parameters here
        datatype: 'json',
        beforeSend: function() {
          $loader.show();
        }
    }).done(function(data) {
      $loader.hide();
      $modalImgHolder.show();
      $output.text(data);
    });
  });
});
