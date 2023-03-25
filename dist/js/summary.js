const amazon = document.getElementById("amazon").getAttribute('value');
console.log(amazon, "Amazon");
async function handleSummary() {
    try {
     const userData = JSON.parse(sessionStorage.getItem("user"));
console.log(userData.userData);
let url = "";
if(amazon == "amazon") {
    url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/amazonresponse?userId=" + userData.userId);
}
    url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/revolutresponse?userId=" + userData.userId);
    const response = await fetch(url);
    const data = await response.json();
    const correctRevolut = document.getElementById("allCorrectRevolut");
    const tableHeader = document.getElementById("tableHeader");
    const tables = document.getElementById("tables");
    if(data.length === 0) {
    tableHeader.style.display= "none";
    tables.style.display = "none";
    }
    else {
    correctRevolut.style.display = "none";
        loadintotable(url);
    }
    console.log(data, "Summary Result");
    } catch (error) {
     console.log(error);
    }
 }

async function loadintotable(url) { 
     const table = document.querySelector("table");
    const response = await fetch(url);
    const data  = await response.json();
    for (const row of data) {
        const rowElement = document.createElement('tr');
            const cellElement1 = document.createElement('td');
            const cellElement2 = document.createElement('td');
            const cellElement3 = document.createElement('td');
            const cellElement4 = document.createElement('td');
            const cellElement5 = document.createElement('td');
            cellElement1.textContent = row.categoryName;
            cellElement2.textContent = row.subCategoryName;
            cellElement3.textContent = row.question;
            cellElement4.textContent = row.isUserResponse;
            cellElement5.textContent = row.isQuestionResponse;
            rowElement.appendChild(cellElement1);
            rowElement.appendChild(cellElement2);
            rowElement.appendChild(cellElement3);
            rowElement.appendChild(cellElement4);
            rowElement.appendChild(cellElement5);
        table.appendChild(rowElement);
    }
}



async function handleAmazonSummary() {
    try {
     const userData = JSON.parse(sessionStorage.getItem("user"));
console.log(userData.userData);
let url = "";

    url = new URL("http://tolutope-001-site1.ctempurl.com/api/Project/amazonresponse?userId=" + userData.userId);
    const response = await fetch(url);
    const data = await response.json();
    const correctRevolut = document.getElementById("allCorrectRevolut");
    const tableHeader = document.getElementById("tableHeader");
    const tables = document.getElementById("tables");
    if(data.length === 0) {
    tableHeader.style.display= "none";
    tables.style.display = "none";
    }
    else {
    correctRevolut.style.display = "none";
    loadintoamazontable(url);
    }
    console.log(data, "Summary Result");
    } catch (error) {
     console.log(error);
    }
 }

async function loadintoamazontable(url) { 
     const table = document.querySelector("table");
    const response = await fetch(url);
    const data  = await response.json();
    for (const row of data) {
        const rowElement = document.createElement('tr');
            const cellElement1 = document.createElement('td');
            const cellElement2 = document.createElement('td');
            const cellElement3 = document.createElement('td');
            const cellElement4 = document.createElement('td');
            const cellElement5 = document.createElement('td');
            cellElement1.textContent = row.categoryName;
            cellElement2.textContent = row.subCategoryName;
            cellElement3.textContent = row.question;
            cellElement4.textContent = row.isUserResponse;
            cellElement5.textContent = row.isQuestionResponse;
            rowElement.appendChild(cellElement1);
            rowElement.appendChild(cellElement2);
            rowElement.appendChild(cellElement3);
            rowElement.appendChild(cellElement4);
            rowElement.appendChild(cellElement5);
        table.appendChild(rowElement);
    }
}

