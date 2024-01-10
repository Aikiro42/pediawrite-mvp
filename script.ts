let globalDemoData: any


function setCookie(cname: string, cvalue:string, exdays:number) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname: string):string | null {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function checkCookie(cname: string): boolean {
  let user: string | null = getCookie(cname);
  if (user) {
    return true;
  } else {
    return false;
  }
}

function deleteCookie(cname: string){
  document.cookie = cname + "=deleted;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
}

function resetData(){
  deleteCookie("demoData");
}

function setupSampleData(debug: boolean){
  if(debug){
    resetData()
  }
  if(!checkCookie("demoData")){
    let demoData = {

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

    }

    demoData.accounts["admin"] = {
      password: "admin",
      employeeID: "0000"
    }
    demoData.accounts["jCornell"] = {
      password: "password",
      employeeID: "0001"
    }

    demoData.employees["0000"] = {
      name: "Root",
      position: "Administrator"
    }
    demoData.employees["0001"] = {
      name: "James T. Cornell",
      position: "Junior Researcher"
    }
    demoData.employees["0002"] = {
      name: "Maria C. Ozawa",
      position: "Pediatrician"
    }
    demoData.employees["0003"] = {
      name: "Arturo D. King",
      position: "Doctor"
    }
    demoData.employees["0004"] = {
      name: "Canson M. Sun",
      position: "Research Head"
    }
    demoData.employees["0005"] = {
      name: "Jason I. Bright",
      position: "Equipment Manager"
    }

    demoData.patients["0001"] = {
      name: "Luis P. Alvarado",
      birthdate: new Date("2000-01-06"),
      bloodType: "B-",
      isMale: true,
      gender: "Male"
    }
    demoData.patients["0002"] = {
      name: "Alicia Isobela Kawayan",
      birthdate: new Date("1999-03-14"),
      bloodType: "A+",
      isMale: false,
      gender: "Non-Binary"
    }
    demoData.patients["0003"] = {
      name: "John Morris Kowilon",
      birthdate: new Date("1999-03-14"),
      bloodType: "O-",
      isMale: true,
      gender: "Male"
    }
    demoData.patients["0004"] = {
      name: "Freesia Rapi",
      birthdate: new Date("1999-03-14"),
      bloodType: "O-",
      isMale: true,
      gender: "Transsexual"
    }

    demoData.equipments["0001"] = {
      name: "X-ray"
    }
    demoData.equipments["0002"] = {
      name: "Neuralizer"
    }
    demoData.equipments["0003"] = {
      name: "Microscope"
    }
    demoData.equipments["0004"] = {
      name: "Test Tube"
    }
    demoData.equipments["0005"] = {
      name: "Beaker"
    }

    setCookie("demoData", JSON.stringify(demoData), 1);
  }
  let retrievedDemoData: string = getCookie("demoData") ?? "{}"
  globalDemoData = JSON.parse(retrievedDemoData)
}

function navlinkOnclickHandler(x){
  $("#content").load(x)
}

function appendReportTableRow(){
  $("#report-table .add-row-button").remove()
  const reportTableEntry = `
  <div class="report-table-row medical-report-form-data">
    <div class="col1 entry-datetime">
      <input class="entry-date" type="date">
      <input class="entry-time" type="time">
    </div>
    <input type="text" class="entry-reference col2">
    <input type="text" class="entry-provider col3">
    <textarea class="entry-encounter col4"></textarea>
  </div>
  `
  $("#report-table").append(reportTableEntry)
  $("#report-table").append(`<button class="report-table-row add-row-button" onclick="appendReportTableRow()">+</button>`)
}

function initMedicalReport(){
  let currentDate = new Date()
  $("#medical-report-employee-name").html(`${globalDemoData.employees[globalDemoData.session.employeeID].name}`)
  $("#medical-report-employee-position").html(`${globalDemoData.employees[globalDemoData.session.employeeID].position}`)
  $("#medical-report-date").html(`${currentDate.toDateString()}, ${currentDate.toTimeString()}`)
}

function saveMedicalReport(){
  const _patientID = $("#patient-id").val()
  if(typeof(_patientID) == "string"){
    if(!globalDemoData.patients[_patientID]){
      $("#medical-report-error-message").html(`Patient ID not in records`)
      return;
    }
  }else{
    $("#medical-report-error-message").html(`Error processing Patient ID`)
    return;
  }
  let docElements = $(".medical-report-form-data");
  for(let i = 0; i < docElements.length; i++){
    const e = docElements[i];
    const _date = (<HTMLInputElement>e.querySelector(".entry-date")).value
    const _time = (<HTMLInputElement>e.querySelector(".entry-time")).value
    const _reference = (<HTMLInputElement>e.querySelector(".entry-reference")).value ?? "No Reference"
    const _provider = (<HTMLInputElement>e.querySelector(".entry-provider")).value ?? "Unknown Provider"
    const _encounter = (<HTMLInputElement>e.querySelector(".entry-encounter")).value ?? "Uneventful Encounter."
    
    if(_date && _time){
      const _encounterDate = new Date(`${_date} ${_time}:00`)
      if(!globalDemoData.medicalRecords[_patientID]){
        globalDemoData.medicalRecords[_patientID] = []
      }
      globalDemoData.medicalRecords[_patientID].push({
        employeeID: globalDemoData.session.employeeID,
        patientID: _patientID,
        reportDate: new Date(),
        encounterDate: _encounterDate,
        reference: _reference,
        provider: _provider,
        description: _encounter
      })
    }else{
      $("#medical-report-error-message").html(`Unspecified ${!_date ? "date" : ""}${!_time ? (!_date?", " : "")  + "time" : ""} at entry ${i+1}`)
      return;
    }
  }
  loadDashboard();
}

function loadConsolidatedReport(){
  const _patientID = $("#consolidated-report-patient-id").val()
  const _startDate = $("#consolidated-report-start-date").val()
  const _endDate = $("#consolidated-report-end-date").val()
  if(typeof(_patientID) == "string"){
    
    if(!globalDemoData.patients[_patientID]){
      $("#consolidated-report-error-message").html(`No patient ID in records`)
      return;
    }
    
    if(!globalDemoData.medicalRecords[_patientID]){
      $("#consolidated-report-error-message").html(`No medical records exist for patient`)
      return;
    }

    $("#consolidated-report-error-message").html(``)
    const patientData = globalDemoData.patients[_patientID]
    let patientBirthDate = new Date(patientData.birthdate)
    // do shit
    const patientInfoHTML = `
    <div id="consolidated-report-patient-info">
      <h3>Patient Information</h3>
      <p><span>Name:</span><span>${patientData.name}</span></p>
      <p><span>Birthdate:</span> <span>${patientBirthDate.toDateString()}</span></p>
      <p><span>Sex:</span> <span>${patientData.isMale ? "Male" : "Female"}</span></p>
      <p><span>Gender:</span> <span>${patientData.gender}</span></p>
      <p><span>Blood Type:</span> <span>${patientData.bloodType}</span></p>
    </div>
    `

    let entriesHTML = ''

    let patientRecordData = globalDemoData.medicalRecords[_patientID]

    patientRecordData.sort((a, b) => {
      let aDate = new Date(a.encounterDate)
      let bDate = new Date(b.encounterDate)
      return aDate.getTime() - bDate.getTime()
    })

    let sDate, eDate
    if(_startDate && typeof(_startDate) == "string"){
      sDate = new Date(_startDate)
    }
    if(_endDate && typeof(_endDate) == "string"){
      eDate = new Date(_endDate)
    }
    
    for(let entry of patientRecordData){
      let entryDate = new Date(entry.encounterDate)

      if(sDate && sDate.getTime() > entryDate.getTime()){
        continue;
      }
      if(eDate && eDate.getTime() < entryDate.getTime()){
        continue;
      }

      let providerData = globalDemoData.employees[entry.employeeID]
      entriesHTML += `
      <div class="encounter-report">
        <div class="info">
          <p><span class="field">Date & Time:</span><span class="value">${`${entryDate.toDateString()}, ${entryDate.toTimeString()}`}</span></p>
          <p><span class="field">Provider:</span><span class="value">${providerData.name}, ${providerData.position}</span></p>
          <p><span class="field">Reference/Page No.:</span><span class="value">${entry.reference}</span></p>
        </div>
        <div class="encounter">
          ${entry.description}
        </div>
      </div>
      `
    }

    $("#consolidated-report-content").html(patientInfoHTML + entriesHTML)
  
  }else{
    $("#consolidated-report-error-message").html(`Error processing Patient ID`)
  }
}

function loadDashboardUpdates(){
  let updateListHTML: string = '';
  for (let update of globalDemoData.updates) {
    updateListHTML += `
    <a class="update-item ${update.isNew ? "new" : ""}" href="#">
      <span class="title">${update.title}</span>
      <div class="date-time">
        <span class="date">${update.date}</span>
        <span class="time">${update.time}</span>
      </div>
    </a>
    `
  }
  $("#update-list").html(updateListHTML);
}

function loadDashboardPendingApproval(){
  let pendingApprovalListHTML: string = '';
  for (let borrowRecord of globalDemoData.borrowRecords) {
    if(borrowRecord.employeeID == globalDemoData.session.employeeID){
      pendingApprovalListHTML += `
        <div class="pending-approval-item">
          <p>${globalDemoData.equipments[borrowRecord.equipmentID].name} <span>(${borrowRecord.rfid})</span></p>
          <p class="item-status">Status: <span class="pending">Pending<span></p>
        </div>
      `
    }
  }
  $("#pending-approval-list").html(pendingApprovalListHTML);

}

function loadDashboard(){
  $("#content").load("dashboard.html");
}

function loadUserProfile(){
  $("#content").load("user-profile.html");
}


function loadBorrowerFormsIndex(){
  $("#current-user-name").html(globalDemoData.employees[globalDemoData.session.employeeID].name)
  $("#current-user-position").html(globalDemoData.employees[globalDemoData.session.employeeID].position)
}

function submitBorrowForm(){
  let _equipmentID = $("#equipment-list").val()
  let _rfid = $("#borrower-form-rfid").val()
  let _purpose = $("#borrower-form-purpose").val()
  let _otherUsers = $("#borrower-form-other-users").val()
  globalDemoData.borrowRecords.push({
    employeeID: globalDemoData.session.employeeID,
    equipmentID: _equipmentID,
    startDate: new Date(),
    endDate: null,
    rfid: _rfid,
    purpose: _purpose,
    otherUsers: _otherUsers
  })
  setCookie("demoData", JSON.stringify(globalDemoData), 1);
  loadDashboard();
}

function searchPatientID(){
  let _patientID = $("#patient-id").val()
  if(typeof(_patientID) == "string"){
    const patientInfo = globalDemoData.patients[_patientID];
    let patientInfoHTML: string = ''
    if(patientInfo){
      const patientBirthDate = new Date(patientInfo.birthdate)
      patientInfoHTML = `
        <span class="form-info"><h2 class="info-name">Patient Name:</h2> <span class="info-value">${patientInfo.name}</span></span>
        <span class="form-info"><h2 class="info-name">Patient Birthdate:</h2> <span class="info-value">${patientBirthDate.toDateString()}</span></span>
        <span class="form-info"><h2 class="info-name">Patient Sex:</h2> <span class="info-value">${patientInfo.isMale ? "Male" : "Female"}</span></span>
        <span class="form-info"><h2 class="info-name">Patient Gender:</h2> <span class="info-value">${patientInfo.gender}</span></span>
      `
    }else{
      patientInfoHTML = `
      <span class="form-info form-error"><h2 class="info-name">Error:</h2> <span class="info-value">Patient Not Found</span></span>
      `
    }
    $("#patient-info").html(patientInfoHTML)
  }
}

function logout(){
  globalDemoData.session.active = false
  setCookie("demoData", JSON.stringify(globalDemoData), 1);
  $("div#content").fadeOut(100, function(){
    $("div#main-sidebar").fadeOut(100, function(){
      $("#content").load("login.html");
      $("#content").fadeIn(100)
    })
  })

}

function login(){
  
  let _username = $("#login-username").val()
  let _password = $("#login-password").val()
  let matchPassword: string = ""
  if(typeof(_username) == "string"){
    let userObj = globalDemoData.accounts[_username]
    if(userObj){
      matchPassword = userObj.password
    }else{
      $("p#msg").html('Account does not exist')
      return;
    }
  }

  if(_password == matchPassword){
    globalDemoData.session.username = _username
    let _employeeID = "0000"
    if(typeof(_username) == "string"){
      _employeeID = globalDemoData.accounts[_username].employeeID
      globalDemoData.session.employeeID = _employeeID
      globalDemoData.session.active = true
      setCookie("demoData", JSON.stringify(globalDemoData), 1);
    }
    $("#login-ui").fadeOut(100, function(){
    
      $("div#main-sidebar #profile-name").html(globalDemoData.employees[_employeeID].name)
      $("div#main-sidebar").fadeIn(100, function(){
        loadDashboard();
      })
    })
  }else{
    $("p#msg").html('Wrong Password')
  }
}

function initWebsite(){
  if(globalDemoData.session.active){
    let _employeeID = globalDemoData.session.employeeID
    $("div#main-sidebar #profile-name").html(globalDemoData.employees[_employeeID].name)
    loadDashboard();
  }else{
    $("div#main-sidebar").hide()
    $("#content").load("login.html");
  }
}

setupSampleData(false)
initWebsite()

