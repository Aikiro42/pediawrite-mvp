var equipmentListHTML = '';
var globalDemoData;
for (var equipmentID in globalDemoData.equipments) {
    equipmentListHTML += "\n    <option value=\"".concat(equipmentID, "\">").concat(globalDemoData.equipments[equipmentID].name, "</option>\n  ");
}
function submitBorrowForm() {
    var _equipmentID = $("#equipment-list").val();
    var _rfid = $("#borrower-form-rfid").val();
    var _purpose = $("#borrower-form-purpose").val();
    var _otherUsers = $("#borrower-form-other-users").val();
    console.log("\n    ".concat(_equipmentID, "\n    ").concat(_rfid, "\n    ").concat(_purpose, "\n    ").concat(_otherUsers, "\n  "));
    globalDemoData.borrowRecords.append({
        employeeID: "0001",
        equipmentID: _equipmentID,
        startDate: new Date(),
        endDate: null,
        rfid: _rfid,
        purpose: _purpose,
        otherUsers: _otherUsers
    });
    setCookie("demoData", JSON.stringify(globalDemoData), 1);
    loadDashboard();
}
$("#equipment-list").html(equipmentListHTML);
