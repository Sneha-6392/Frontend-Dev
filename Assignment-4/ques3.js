class book{
    constructor(title, author, isbn, isIssued=false){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.isIssued=isIssued;
    }
    issueBook(){
        if(this.isIssued){
            console.log(`The book "${this.title}" is already issued.`);
        }else{
            this.isIssued=true;
            console.log(`you have issued the book "${this.title}"`);
        }
    }
    returnBook() {
        if (!this.isIssued) {
            console.log(` The book "${this.title}" was not issued.`);
        } else {
            this.isIssued = false;
            console.log(` You have returned the book: "${this.title}"`);
        }
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Issued: ${this.isIssued}`;
    }
}
let books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN1001"),
    new Book("Atomic Habits", "James Clear", "ISBN1002"),
    new Book("400 Days", "Chetan Bhagat", "ISBN1003"),
    new Book("Harry Potter", "J.K. Rowling", "ISBN1004")
];
console.log(" Available Books:");
books
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));
function issueBookByISBN(searchISBN) {
    let book = books.find(b => b.isbn === searchISBN);
    if (!book) {
        console.log("Book not found!");
    } else {
        book.issueBook();
    }
}
console.log("\n Trying to issue book ISBN1003:");
issueBookByISBN("ISBN1003");
console.log("\n Available Books After Issuing:");
books
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));
