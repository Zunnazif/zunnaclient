function humbergerHandler() {
    let dropdown = document.getElementById('dropdown');
    
    if (!dropdown.classList.contains('hidden')){
        dropdown.classList.add('hidden');
    } else {
        dropdown.classList.remove('hidden');
    };
};

function changeHandler() {
    let getNameBook = document.getElementById('getNameBook');
    let getSKUBook = document.getElementById('getSKUBook');

    if (getNameBook.classList.contains('hidden')){
        getNameBook.classList.remove('hidden');
        getSKUBook.classList.add('hidden');
        getSKUBook.value = "";
    } else {
        getNameBook.classList.add('hidden');
        getSKUBook.classList.remove('hidden');
        getNameBook.value = "";
    };
    
    console.log("getNameBook", getNameBook.value)
    console.log("getSKUBook", getSKUBook.value)
};

function alertHandler() {
    let alertBorder = document.getElementById('alert-border');

    alertBorder.classList.add('hidden');

};

function addSKUonInput(sku){
    let skuID = document.getElementById('skuID');

    skuID.value += ` ${sku} `;

}

function upDown(idAddBook, togelUpDown){
    let addBook = document.getElementById(idAddBook)
    let togel = document.getElementById(togelUpDown)

    if (!addBook.classList.contains('hidden')){
        addBook.classList.add('hidden')
        togel.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
    } else {
        addBook.classList.remove('hidden')
        togel.innerHTML = '<i class="fa-solid fa-chevron-up "></i>'
    }


}