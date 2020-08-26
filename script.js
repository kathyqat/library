let myLibrary = [];
const properties = ['author', 'title', 'numOfPages', 'status'];
const placeholders = ['Author', 'Title', 'Number of Pages', 'Status'];
const mainDiv = document.querySelector('#main');

function Book(author, title, numOfPages, status){
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
    this.status = status
}

function addBookToLibrary(author, title, numOfPages, status){
    const book = new Book(author, title, numOfPages, status);
    myLibrary.push(book);
}

function render(){
    mainDiv.setAttribute('id', 'main');
    myLibrary = myLibrary.sort((a, b) => (a.title > b.title) ? 1: -1);
    
    for (let i=0; i<myLibrary.length; i++){
        const book = document.createElement('p');
        const randomRColor = randomNum();
        const randomGColor = randomNum();
        const randomBColor = randomNum();
        
        book.style.backgroundColor = `rgb(${randomRColor}, ${randomGColor}, ${randomBColor})`;
        book.innerHTML = `<strong>${myLibrary[i].title}</strong> <br>
            ${myLibrary[i].author} <br>
            ${myLibrary[i].numOfPages} <br>
            ${myLibrary[i].status}`;
        mainDiv.appendChild(book);
    };
  
    setEqualSize();
}

function randomNum(){
    return Math.floor(Math.random() * 255);
}

function setEqualSize(){
    const p = document.querySelectorAll('p');
    let maxHeight = 0;
    let maxWidth = 0;
    
    p.forEach((p) => {
        if (p.clientHeight > maxHeight){
            maxHeight = p.clientHeight;
        };
        if (p.clientWidth > maxWidth){
            maxWidth = p.clientWidth;
        };
    });
    
    maxHeight = maxHeight - 40;
    maxWidth = maxWidth - 40;
    p.forEach((p) => {
        p.style.height = `${maxHeight}px`;
        p.style.width = `${maxWidth}px`;
    });
}

render();

const newBookButton = document.querySelector('#newBook');
newBookButton.addEventListener('click', () => {
    const form = document.querySelector('form');
    if (!form){
        createForm();
        submitBookInfo();
    };
});

function createForm(){
    mainDiv.removeAttribute('id', 'main');
    const cleanBooks = document.querySelectorAll('p');
    cleanBooks.forEach((book) => {
        mainDiv.removeChild(book);
    });
    const form = document.createElement('form');
    mainDiv.appendChild(form);
    
    for (let i=0; i<4; i++){
        const input = document.createElement('input');
        input.setAttribute('id', `${properties[i]}`);
        input.setAttribute('placeholder', `${placeholders[i]}`);
        input.setAttribute('type', 'text');
        form.appendChild(input);
    };
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
}

function submitBookInfo(){
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', () => {
        const author = document.querySelector('#author').value;
        const title = document.querySelector('#title').value;
        const numOfPages = document.querySelector('#numOfPages').value;
        const status = document.querySelector('#status').value;
        addBookToLibrary(author, title, numOfPages, status);
        
        const form = document.querySelector('form');
        mainDiv.removeChild(form);
        render();
    });
}