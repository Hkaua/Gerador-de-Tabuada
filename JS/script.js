const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector("#multiplication-operations");

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        console.log(result);

        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = parseInt(numberInput.value, 10);
    const multiplicatorNumber = parseInt(multiplicationInput.value, 10);

    if (isNaN(multiplicationNumber) || isNaN(multiplicatorNumber) || multiplicationNumber <= 0 || multiplicatorNumber <= 0) {
        alert("Por favor, insira números inteiros positivos.");
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber);
});
