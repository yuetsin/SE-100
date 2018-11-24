"use strict";
// query.ts
exports.__esModule = true;
var json_link_header = "https://raw.githubusercontent.com/yuxiqian/finda-studyroom/master/json_output/";
function query(start_year, term) {
    var json_url = json_link_header + start_year + "_" + start_year + 1 + "_" + term;
    $.get(json_url, function (data) {
        $('#result').append('<p>interval:' + data.name + '</p>');
    }, 'json');
}
exports.query = query;
