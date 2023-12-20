function loadDashboard() { }
function setCookie(a, b, c) { }

let equipmentListHTML: string = ''
let globalDemoData: any;
for(let equipmentID in globalDemoData.equipments){
  equipmentListHTML += `
    <option value="${equipmentID}">${globalDemoData.equipments[equipmentID].name}</option>
  `
}

$("#equipment-list").html(equipmentListHTML);