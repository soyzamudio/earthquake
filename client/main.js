/* global _ */

'use strict';

$(document).ready(init);

function init() {
  $('#get-data').click(clickGetData);
}

function clickGetData() {
  var year = $('#year').val();
  var deathBy = $('#disease').val();
  var url = 'https://cdph.data.ca.gov/resource/kbup-p858.json?year=' + year;

  $.getJSON(url, function(res) {
    var deaths = _.map(res, function(o) { return o[deathBy] * 1; });
    deaths = _.compact(deaths);
    deaths = _.reduce(deaths, function(prev, curr) { return prev + curr; });
    console.log(deaths);
  });
}
