"use strict";
let products = [];
const tableBody = document.getElementById("productTableBody");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("productForm");
// funkcja ktora tworzy tabele z produktami :3
function renderTable() {
    tableBody.innerHTML = "";
    products.forEach((p, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.ean}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.sector} / ${p.shelf} / ${p.level}</td>
            <td><button type="button" onclick="deleteProduct(${index})">Usuń</button></td>
        `;
        tableBody.appendChild(row);
    });
}
addBtn.addEventListener("click", () => {
    const ean = document.getElementById("ean").value.trim();
    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value.trim();
    const sector = document.getElementById("sector").value.trim();
    const shelf = document.getElementById("shelf").value.trim();
    const level = document.getElementById("level").value.trim();
    if (ean.length !== 13 || isNaN(Number(ean))) {
        alert("wpisz poprawny kod EAN - 13 cyfr");
        return;
    }
    if (sector === " " || isNaN(Number(sector)) || Number(sector) <= 0) {
        alert("sektor musi byc liczba dodatnia");
        return;
    }
    if (shelf === " " || isNaN(Number(shelf)) || Number(shelf) <= 0) {
        alert("polka musi byc liczba dodatnia");
        return;
    }
    const newProduct = { ean, name, category, sector, shelf, level };
    products.push(newProduct);
    renderTable();
    form.reset();
});
//elegancko usuwamy sobie z tablicy produkty
window.deleteProduct = function (index) {
    products.splice(index, 1);
    renderTable();
};
renderTable();
