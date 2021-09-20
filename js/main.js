var rowId = 0;

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

document.getElementById("petsave-button").onclick = function() {
    rowId += 1;

    let pet = {
        dateInput: document.getElementById("date-input").value,
        ownerInput: document.getElementById("owner-input").value,
        petNameInput: document.getElementById("petname-input").value,
        chipInput: document.getElementById("chip-input").value,
        petSpeciesInput: document.getElementById("petspecies-input").value,
        petSexInput: document.getElementById("petsex-input").value,
        petSizeInput: document.getElementById("petsize-input").value,
        petDangerInput: document.getElementById("petdanger-input").value,
        petSterilizedInput: document.getElementById("petsterilized-input").value,
        petLoaction: document.getElementById("petlocation-input").value,
    };

    //Show in table

    let tr = document.createElement("tr");
    tr.setAttribute("id", "row-" + rowId);

    let tdId = document.createElement("td");
    tdId.innerText = rowId;
    tr.appendChild(tdId);

    Object.keys(pet).forEach((key) => {
        console.log(key);

        let td = document.createElemente("td");
        td.innetHTML = pet[key];

        tr.appendChild(td);
    });

    let tdActions = document.createElement("td");

    let input = document.createElement("input");
    input.setAttribute("id", "delete-" + rowId);
    input.setAttribute("type", "button");
    input.value = "Eliminar";
    input.onclick = function() {
        let id = this.getAttribute("id");
        id = +id.replace("delete-", "");

        document.getElementById("row-" + id).remove();

    };

    tdActions.appendChild(input);

    tr.appendChild(tdActions);

    document.getElementById("body-table").appendChild(tr);
};