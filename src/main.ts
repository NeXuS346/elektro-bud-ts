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