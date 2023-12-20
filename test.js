var globalDemoData;
var updateListHTML = "";
for (var _i = 0, _a = globalDemoData.updates; _i < _a.length; _i++) {
    var update = _a[_i];
    console.log(update.title);
    updateListHTML += "\n  <a class=\"update-item ".concat(update.isNew ? "new" : "", "\" href=\"#\">\n    <span class=\"title\">").concat(update.title, "</span>\n    <div class=\"date-time\">\n      <span class=\"date\">").concat(update.date, "</span>\n      <span class=\"time\">").concat(update.time, "</span>\n    </div>\n  </a>\n  ");
}
$("#update-list").html(updateListHTML);
