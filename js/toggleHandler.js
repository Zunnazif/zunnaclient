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