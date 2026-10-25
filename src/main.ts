type Product = {
    ean: string;
    name: string;
    category: string;
    sector: string;
    shelf: string;
    level: string;
};

let products: Product[] = [];

const tableBody = document.getElementById("productTableBody") as HTMLTableSectionElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const form = document.getElementById("productForm") as HTMLFormElement;

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