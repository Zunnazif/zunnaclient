function humbergerHandler() {
  let dropdown = document.getElementById("dropdown");

  if (!dropdown.classList.contains("hidden")) {
    dropdown.classList.add("hidden");
  } else {
    dropdown.classList.remove("hidden");
  }
}

function changeHandler() {
  let getNameBook = document.getElementById("getNameBook");
  let getSKUBook = document.getElementById("getSKUBook");
  let thSKU = document.getElementById("thSKU");
  let thNama = document.getElementById("thNama");

  if (getNameBook.classList.contains("hidden")) {
    getNameBook.classList.remove("hidden");
    thNama.classList.add("bg-gray-800");
    thSKU.classList.remove("bg-gray-800");
    getSKUBook.classList.add("hidden");
    getSKUBook.value = "";
  } else {
    getNameBook.classList.add("hidden");
    getSKUBook.classList.remove("hidden");
    thNama.classList.remove("bg-gray-800");
    thSKU.classList.add("bg-gray-800");
    getNameBook.value = "";
  }
}

function alertHandler() {
  let alertBorder = document.getElementById("alert-border");
  alertBorder.classList.remove("left-0");
  alertBorder.classList.add("-left-full");
}

function addSKUonInput(sku) {
  let skuID = document.getElementById("skuID");

  skuID.value += ` ${sku} `;
}

function upDown(idAddBook, togelUpDown) {
  let addBook = document.getElementById(idAddBook);
  let togel = document.getElementById(togelUpDown);

  if (!addBook.classList.contains("hidden")) {
    addBook.classList.add("hidden");
    togel.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  } else {
    addBook.classList.remove("hidden");
    togel.innerHTML = '<i class="fa-solid fa-chevron-up "></i>';
  }
}
