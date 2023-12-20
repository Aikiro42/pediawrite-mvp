var globalDemoData;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
function checkCookie(cname) {
    var user = getCookie(cname);
    if (user) {
        return true;
    }
    else {
        return false;
    }
}
function deleteCookie(cname) {
    document.cookie = cname + "=deleted;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
function resetData() {
    deleteCookie("demoData");
}
function setupSampleData(debug) {
    var _a;
    if (debug) {
        resetData();
    }
    if (!checkCookie("demoData")) {
        var demoData = {
            session: {
                username: "jCornell",
                employeeID: "0001",
                active: debug
            },
            accounts: {},
            employees: {},
            patients: {},
            equipments: {},
            updates: [
                {
                    title: "Transport Strike Schedules",
                    description: "The Public Utility Vehicle Union is planning to hold transport strikes in protest...",
                    date: "2023-12-10",
                    time: "10:00 AM",
                    isNew: true
                },
                {
                    title: "Employee of the Month (December 2023)",
                    description: "We would like to congratulate Dr. Maria Ozawa for her exemplary performance in her role as...",
                    date: "2023-12-05",
                    time: "12:00 PM",
                    isNew: true
                },
                {
                    title: "COVID-19 Protocol 2023-12",
                    description: "Here are new details about the protocols for COVID patients this month...",
                    date: "2023-12-02",
                    time: "1:27 PM",
                    isNew: true
                },
                {
                    title: "Overdue Equipment Reminder",
                    date: "2023-11-25",
                    description: "Please remember to renew equipment borrowing permissions. The forms can be found...",
                    time: "9:00 AM",
                    isNew: false
                },
                {
                    title: "Medical Research Assignment: COVID-19 Omega Variant",
                    date: "2023-10-07",
                    time: "11:00 AM",
                    description: "The following personell are assigned to study the current variant of COVID:",
                    isNew: false
                }
            ],
            borrowRecords: [
                {
                    employeeID: "0001",
                    equipmentID: "0001",
                    startDate: new Date("2023-12-12"),
                    endDate: null,
                    rfid: "74596278890370345",
                    purpose: "Medical analysis",
                    otherUsers: "None"
                },
                {
                    employeeID: "0001",
                    equipmentID: "0001",
                    startDate: new Date("2023-11-12"),
                    endDate: new Date("2023-12-01"),
                    rfid: "56807603476093745",
                    purpose: "Medical research",
                    otherUsers: "None"
                }
            ],
            medicalRecords: {
                "0001": [
                    {
                        employeeID: "0002",
                        patientID: "0001",
                        reportDate: new Date("2023-12-12"),
                        encounterDate: new Date("2023-12-06 08:18:00"),
                        reference: "pp. 13, Medical Institutional Records 2022-2023",
                        description: "Patient has untreated ebola. Referred to researcher Cornell, James."
                    },
                    {
                        employeeID: "0001",
                        patientID: "0001",
                        reportDate: new Date("2023-12-12"),
                        encounterDate: new Date("2023-12-07 09:24:00"),
                        reference: "pp. 16, Intl. Illness Directory 2022-2023",
                        description: "Administered first-aid care to patient. Sample #05863 taken from patient for testing."
                    },
                    {
                        employeeID: "0002",
                        patientID: "0001",
                        reportDate: new Date("2023-12-12"),
                        encounterDate: new Date("2023-12-04 08:00:00"),
                        reference: "pp. 13, Medical Institutional Records 2022-2023",
                        description: "Patient first encountered."
                    },
                ]
            }
        };
        demoData.accounts["admin"] = {
            password: "admin",
            employeeID: "0000"
        };
        demoData.accounts["jCornell"] = {
            password: "password",
            employeeID: "0001"
        };
        demoData.employees["0000"] = {
            name: "Root",
            position: "Administrator"
        };
        demoData.employees["0001"] = {
            name: "James T. Cornell",
            position: "Junior Researcher"
        };
        demoData.employees["0002"] = {
            name: "Maria C. Ozawa",
            position: "Pediatrician"
        };
        demoData.employees["0003"] = {
            name: "Arturo D. King",
            position: "Doctor"
        };
        demoData.employees["0004"] = {
            name: "Canson M. Sun",
            position: "Research Head"
        };
        demoData.employees["0005"] = {
            name: "Jason I. Bright",
            position: "Equipment Manager"
        };
        demoData.patients["0001"] = {
            name: "Luis P. Alvarado",
            birthdate: new Date("2000-01-06"),
            bloodType: "B-",
            isMale: true,
            gender: "Male"
        };
        demoData.patients["0002"] = {
            name: "Alicia Isobela Kawayan",
            birthdate: new Date("1999-03-14"),
            bloodType: "A+",
            isMale: false,
            gender: "Non-Binary"
        };
        demoData.patients["0003"] = {
            name: "John Morris Kowilon",
            birthdate: new Date("1999-03-14"),
            bloodType: "O-",
            isMale: true,
            gender: "Male"
        };
        demoData.patients["0004"] = {
            name: "Freesia Rapi",
            birthdate: new Date("1999-03-14"),
            bloodType: "O-",
            isMale: true,
            gender: "Transsexual"
        };
        demoData.equipments["0001"] = {
            name: "X-ray"
        };
        demoData.equipments["0002"] = {
            name: "Neuralizer"
        };
        demoData.equipments["0003"] = {
            name: "Microscope"
        };
        demoData.equipments["0004"] = {
            name: "Test Tube"
        };
        demoData.equipments["0005"] = {
            name: "Beaker"
        };
        setCookie("demoData", JSON.stringify(demoData), 1);
    }
    var retrievedDemoData = (_a = getCookie("demoData")) !== null && _a !== void 0 ? _a : "{}";
    globalDemoData = JSON.parse(retrievedDemoData);
}
function navlinkOnclickHandler(x) {
    $("#content").load(x);
}
function appendReportTableRow() {
    $("#report-table .add-row-button").remove();
    var reportTableEntry = "\n  <div class=\"report-table-row medical-report-form-data\">\n    <div class=\"col1 entry-datetime\">\n      <input class=\"entry-date\" type=\"date\">\n      <input class=\"entry-time\" type=\"time\">\n    </div>\n    <input type=\"text\" class=\"entry-reference col2\">\n    <input type=\"text\" class=\"entry-provider col3\">\n    <textarea class=\"entry-encounter col4\"></textarea>\n  </div>\n  ";
    $("#report-table").append(reportTableEntry);
    $("#report-table").append("<button class=\"report-table-row add-row-button\" onclick=\"appendReportTableRow()\">+</button>");
}
function initMedicalReport() {
    var currentDate = new Date();
    $("#medical-report-employee-name").html("".concat(globalDemoData.employees[globalDemoData.session.employeeID].name));
    $("#medical-report-employee-position").html("".concat(globalDemoData.employees[globalDemoData.session.employeeID].position));
    $("#medical-report-date").html("".concat(currentDate.toDateString(), ", ").concat(currentDate.toTimeString()));
}
function saveMedicalReport() {
    var _a, _b, _c;
    var _patientID = $("#patient-id").val();
    if (typeof (_patientID) == "string") {
        if (!globalDemoData.patients[_patientID]) {
            $("#medical-report-error-message").html("Patient ID not in records");
            return;
        }
    }
    else {
        $("#medical-report-error-message").html("Error processing Patient ID");
        return;
    }
    var docElements = $(".medical-report-form-data");
    for (var i = 0; i < docElements.length; i++) {
        var e = docElements[i];
        var _date = e.querySelector(".entry-date").value;
        var _time = e.querySelector(".entry-time").value;
        var _reference = (_a = e.querySelector(".entry-reference").value) !== null && _a !== void 0 ? _a : "No Reference";
        var _provider = (_b = e.querySelector(".entry-provider").value) !== null && _b !== void 0 ? _b : "Unknown Provider";
        var _encounter = (_c = e.querySelector(".entry-encounter").value) !== null && _c !== void 0 ? _c : "Uneventful Encounter.";
        if (_date && _time) {
            var _encounterDate = new Date("".concat(_date, " ").concat(_time, ":00"));
            if (!globalDemoData.medicalRecords[_patientID]) {
                globalDemoData.medicalRecords[_patientID] = [];
            }
            globalDemoData.medicalRecords[_patientID].push({
                employeeID: globalDemoData.session.employeeID,
                patientID: _patientID,
                reportDate: new Date(),
                encounterDate: _encounterDate,
                reference: _reference,
                provider: _provider,
                description: _encounter
            });
        }
        else {
            $("#medical-report-error-message").html("Unspecified ".concat(!_date ? "date" : "").concat(!_time ? (!_date ? ", " : "") + "time" : "", " at entry ").concat(i + 1));
            return;
        }
    }
    loadDashboard();
}
function loadConsolidatedReport() {
    var _patientID = $("#consolidated-report-patient-id").val();
    var _startDate = $("#consolidated-report-start-date").val();
    var _endDate = $("#consolidated-report-end-date").val();
    if (typeof (_patientID) == "string") {
        if (!globalDemoData.patients[_patientID]) {
            $("#consolidated-report-error-message").html("No patient ID in records");
            return;
        }
        if (!globalDemoData.medicalRecords[_patientID]) {
            $("#consolidated-report-error-message").html("No medical records exist for patient");
            return;
        }
        $("#consolidated-report-error-message").html("");
        var patientData = globalDemoData.patients[_patientID];
        var patientBirthDate = new Date(patientData.birthdate);
        // do shit
        var patientInfoHTML = "\n    <div id=\"consolidated-report-patient-info\">\n      <h3>Patient Information</h3>\n      <p><span>Name:</span><span>".concat(patientData.name, "</span></p>\n      <p><span>Birthdate:</span> <span>").concat(patientBirthDate.toDateString(), "</span></p>\n      <p><span>Sex:</span> <span>").concat(patientData.isMale ? "Male" : "Female", "</span></p>\n      <p><span>Gender:</span> <span>").concat(patientData.gender, "</span></p>\n      <p><span>Blood Type:</span> <span>").concat(patientData.bloodType, "</span></p>\n    </div>\n    ");
        var entriesHTML = '';
        var patientRecordData = globalDemoData.medicalRecords[_patientID];
        patientRecordData.sort(function (a, b) {
            var aDate = new Date(a.encounterDate);
            var bDate = new Date(b.encounterDate);
            return aDate.getTime() - bDate.getTime();
        });
        var sDate = void 0, eDate = void 0;
        if (_startDate && typeof (_startDate) == "string") {
            sDate = new Date(_startDate);
        }
        if (_endDate && typeof (_endDate) == "string") {
            eDate = new Date(_endDate);
        }
        for (var _i = 0, patientRecordData_1 = patientRecordData; _i < patientRecordData_1.length; _i++) {
            var entry = patientRecordData_1[_i];
            var entryDate = new Date(entry.encounterDate);
            if (sDate && sDate.getTime() > entryDate.getTime()) {
                continue;
            }
            if (eDate && eDate.getTime() < entryDate.getTime()) {
                continue;
            }
            var providerData = globalDemoData.employees[entry.employeeID];
            entriesHTML += "\n      <div class=\"encounter-report\">\n        <div class=\"info\">\n          <p><span class=\"field\">Date & Time:</span><span class=\"value\">".concat("".concat(entryDate.toDateString(), ", ").concat(entryDate.toTimeString()), "</span></p>\n          <p><span class=\"field\">Provider:</span><span class=\"value\">").concat(providerData.name, ", ").concat(providerData.position, "</span></p>\n          <p><span class=\"field\">Reference/Page No.:</span><span class=\"value\">").concat(entry.reference, "</span></p>\n        </div>\n        <div class=\"encounter\">\n          ").concat(entry.description, "\n        </div>\n      </div>\n      ");
        }
        $("#consolidated-report-content").html(patientInfoHTML + entriesHTML);
    }
    else {
        $("#consolidated-report-error-message").html("Error processing Patient ID");
    }
}
function loadDashboardUpdates() {
    var updateListHTML = '';
    for (var _i = 0, _a = globalDemoData.updates; _i < _a.length; _i++) {
        var update = _a[_i];
        updateListHTML += "\n    <a class=\"update-item ".concat(update.isNew ? "new" : "", "\" href=\"#\">\n      <span class=\"title\">").concat(update.title, "</span>\n      <div class=\"date-time\">\n        <span class=\"date\">").concat(update.date, "</span>\n        <span class=\"time\">").concat(update.time, "</span>\n      </div>\n    </a>\n    ");
    }
    $("#update-list").html(updateListHTML);
}
function loadDashboardPendingApproval() {
    var pendingApprovalListHTML = '';
    for (var _i = 0, _a = globalDemoData.borrowRecords; _i < _a.length; _i++) {
        var borrowRecord = _a[_i];
        if (borrowRecord.employeeID == globalDemoData.session.employeeID) {
            pendingApprovalListHTML += "\n        <div class=\"pending-approval-item\">\n          <p>".concat(globalDemoData.equipments[borrowRecord.equipmentID].name, " <span>(").concat(borrowRecord.rfid, ")</span></p>\n          <p class=\"item-status\">Status: <span class=\"pending\">Pending<span></p>\n        </div>\n      ");
        }
    }
    $("#pending-approval-list").html(pendingApprovalListHTML);
}
function loadDashboard() {
    $("#content").load("dashboard.html");
}
function loadUserProfile() {
    $("#content").load("user-profile.html");
}
function loadBorrowerFormsIndex() {
    $("#current-user-name").html(globalDemoData.employees[globalDemoData.session.employeeID].name);
    $("#current-user-position").html(globalDemoData.employees[globalDemoData.session.employeeID].position);
}
function submitBorrowForm() {
    var _equipmentID = $("#equipment-list").val();
    var _rfid = $("#borrower-form-rfid").val();
    var _purpose = $("#borrower-form-purpose").val();
    var _otherUsers = $("#borrower-form-other-users").val();
    globalDemoData.borrowRecords.push({
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
function searchPatientID() {
    var _patientID = $("#patient-id").val();
    if (typeof (_patientID) == "string") {
        var patientInfo = globalDemoData.patients[_patientID];
        var patientInfoHTML = '';
        if (patientInfo) {
            var patientBirthDate = new Date(patientInfo.birthdate);
            patientInfoHTML = "\n        <span class=\"form-info\"><h2 class=\"info-name\">Patient Name:</h2> <span class=\"info-value\">".concat(patientInfo.name, "</span></span>\n        <span class=\"form-info\"><h2 class=\"info-name\">Patient Birthdate:</h2> <span class=\"info-value\">").concat(patientBirthDate.toDateString(), "</span></span>\n        <span class=\"form-info\"><h2 class=\"info-name\">Patient Sex:</h2> <span class=\"info-value\">").concat(patientInfo.isMale ? "Male" : "Female", "</span></span>\n        <span class=\"form-info\"><h2 class=\"info-name\">Patient Gender:</h2> <span class=\"info-value\">").concat(patientInfo.gender, "</span></span>\n      ");
        }
        else {
            patientInfoHTML = "\n      <span class=\"form-info form-error\"><h2 class=\"info-name\">Error:</h2> <span class=\"info-value\">Patient Not Found</span></span>\n      ";
        }
        $("#patient-info").html(patientInfoHTML);
    }
}
function logout() {
    globalDemoData.session.active = false;
    setCookie("demoData", JSON.stringify(globalDemoData), 1);
    $("div#content").fadeOut(100, function () {
        $("div#main-sidebar").fadeOut(100, function () {
            $("#content").load("login.html");
            $("#content").fadeIn(100);
        });
    });
}
function login() {
    var _username = $("#login-username").val();
    var _password = $("#login-password").val();
    var matchPassword = "";
    if (typeof (_username) == "string") {
        var userObj = globalDemoData.accounts[_username];
        if (userObj) {
            matchPassword = userObj.password;
        }
        else {
            $("p#msg").html('Account does not exist');
            return;
        }
    }
    if (_password == matchPassword) {
        globalDemoData.session.username = _username;
        var _employeeID_1 = "0000";
        if (typeof (_username) == "string") {
            _employeeID_1 = globalDemoData.accounts[_username].employeeID;
            globalDemoData.session.employeeID = _employeeID_1;
            globalDemoData.session.active = true;
            setCookie("demoData", JSON.stringify(globalDemoData), 1);
        }
        $("#login-ui").fadeOut(100, function () {
            $("div#main-sidebar #profile-name").html(globalDemoData.employees[_employeeID_1].name);
            $("div#main-sidebar").fadeIn(100, function () {
                loadDashboard();
            });
        });
    }
    else {
        $("p#msg").html('Wrong Password');
    }
}
function initWebsite() {
    if (globalDemoData.session.active) {
        var _employeeID = globalDemoData.session.employeeID;
        $("div#main-sidebar #profile-name").html(globalDemoData.employees[_employeeID].name);
        loadDashboard();
    }
    else {
        $("div#main-sidebar").hide();
        $("#content").load("login.html");
    }
}
setupSampleData(false);
initWebsite();
