var btn = document.querySelector('button');
var input = document.querySelector('input');
var ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value='';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

btn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);

// btn.addEventListener('click', function() {

// })