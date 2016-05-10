/* 
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 wodevevelopers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function ($) {
    $.fn.gridTableView = function (options) {

        var object = this;

        var defaults = {
            'url': null,
            'sortable': false
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function () {
            var newTable = '<thead><tr>';
            $.ajax({
                url: settings.url,
                success: function (data, textStatus, jqXHR) {
                    $.each(data[0], function (key, json) {
                        newTable += "<th>" + key + "</th>";
                    });
                    newTable += "</tr></thead><tbody>";

                    $.each(data, function (key, row) {
                        newTable += "<tr>";
                        $.each(row, function (key, fieldValue) {
                            newTable += "<td>" + fieldValue + "</td>";
                        });
                        newTable += "</tr>";
                    });
                    newTable += '</tbody>';
                    object.html(newTable);
                    
                    if (settings.sortable === true) {
                        object.tablesort();
                    }
                }
            });
        });

    };
})(jQuery);
