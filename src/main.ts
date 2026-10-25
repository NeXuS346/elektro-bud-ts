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

//samo dodawanie produktow
addBtn.addEventListener("click", () => {
    const ean = (document.getElementById("ean") as HTMLInputElement).value.trim();
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const category = (document.getElementById("category") as HTMLInputElement).value.trim();
    const sector = (document.getElementById("sector") as HTMLInputElement).value.trim();
    const shelf = (document.getElementById("shelf") as HTMLInputElement).value.trim();
    const level = (document.getElementById("level") as HTMLInputElement).value.trim();
//walidacja jakas basic zeby sprawdzic najwazniejsze rzeczy
    if(ean.length !== 13 || isNaN(Number(ean))){
        alert("wpisz poprawny kod EAN - 13 cyfr");
        return;
    }

    if(sector === " " || isNaN(Number(sector)) || Number(sector) <= 0){
        alert("sektor musi byc liczba dodatnia");
        return;
    }

    if(shelf ===" " || isNaN(Number(shelf)) || Number(shelf) <= 0){
        alert("polka musi byc liczba dodatnia");
        return;
    }

    const newProduct: Product = { ean, name, category, sector, shelf, level };

    products.push(newProduct);
    renderTable();

    form.reset(); 
});

//elegancko usuwamy sobie z tablicy produkty
(window as any).deleteProduct = function(index: number) {
    products.splice(index, 1);
    renderTable();
};

renderTable();