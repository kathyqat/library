let myLibrary = ['War and Peace', 'Sir Thursday', 'Noblesse', 'A Brief History of Time'];
const mainDiv = document.querySelector('#main');

function Book(title){
    this.title = title
}

function addBookToLibrary(){
    let book = window.prompt("Enter book title");
    myLibrary.push(book);
}

function render(){
    myLibrary = myLibrary.sort((a, b) => (a > b) ? 1: -1);
    
    for (let i=0; i<myLibrary.length; i++){
        const bookTitle = document.createElement('p');
        const randomRColor = randomNum();
        const randomGColor = randomNum();
        const randomBColor = randomNum();
        
        bookTitle.style.backgroundColor = `rgb(${randomRColor}, ${randomGColor}, ${randomBColor})`;
        bookTitle.textContent = myLibrary[i];
        mainDiv.appendChild(bookTitle);
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