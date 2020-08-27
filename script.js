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
        const bookDisplay = document.createElement('div');
        bookDisplay.setAttribute('class', 'bookDisplay');
        mainDiv.appendChild(bookDisplay);
        
        const book = document.createElement('p');
        book.innerHTML = `<strong>${myLibrary[i].title}</strong> <br>
            ${myLibrary[i].author} <br>
            ${myLibrary[i].numOfPages} <br>
            ${myLibrary[i].status}`;
        bookDisplay.appendChild(book);
        
        const removeBookButton = document.createElement('button');
        removeBookButton.setAttribute('data-index', `${i}`);
        removeBookButton.setAttribute('class', 'remove');
        removeBookButton.setAttribute('type', 'button');
        removeBookButton.textContent = 'Remove book';
        bookDisplay.appendChild(removeBookButton);
        removeBookButton.addEventListener('click', function(e){removeBook(e.target)});
        
        const randomRColor = randomNum();
        const randomGColor = randomNum();
        const randomBColor = randomNum();
        bookDisplay.style.backgroundColor = `rgb(${randomRColor}, ${randomGColor}, ${randomBColor})`;
    };
    
    setEqualSize();
}
  
render();
  
function removeBook(button){
    const index = button.getAttribute('data-index');
    myLibrary.splice(index, 1);
    cleanDisplay();
    render();
}
  
function cleanDisplay(){
    const cleanDisplay = document.querySelectorAll('.bookDisplay');
    cleanDisplay.forEach((book) => {
        mainDiv.removeChild(book);
    });
}
  
function randomNum(){
    return Math.floor(Math.random() * 255);
}
  
function setEqualSize(){
    const bookDisplay = document.querySelectorAll('.bookDisplay');
    let maxHeight = 0;
    let maxWidth = 0;
    
    bookDisplay.forEach((book) => {
        if (book.clientHeight > maxHeight){
            maxHeight = book.clientHeight;
        };
        if (book.clientWidth > maxWidth){
            maxWidth = book.clientWidth;
        };
    });
    
    maxHeight = maxHeight - 20;
    maxWidth = maxWidth;
    bookDisplay.forEach((book) => {
        book.style.height = `${maxHeight}px`;
        book.style.width = `${maxWidth}px`;
    });
}
  
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
    cleanDisplay();
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