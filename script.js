function humbergerHandler() {
    let dropdown = document.getElementById('dropdown');
    
    if (!dropdown.classList.contains('hidden')){
        dropdown.classList.add('hidden')
    } else {
        dropdown.classList.remove('hidden')
    }
}

function changeHandler() {
    let getNameBook = document.getElementById('getNameBook');
    let getSKUBook = document.getElementById('getSKUBook');

    if (getNameBook.classList.contains('hidden')){
        getNameBook.classList.remove('hidden')
        getSKUBook.classList.add('hidden')
    } else {
        getNameBook.classList.add('hidden')
        getSKUBook.classList.remove('hidden')
    }


}