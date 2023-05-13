// addFavoriteBook should add a book if it's not already in the array, 
// printFavoriteBook should print list of books to the console, and number of books.

const favoriteBooks = [];

function addFavoriteBook(bookTitle) {
    if (!bookTitle.includes("Great")) {
        favoriteBooks.push(bookTitle);
    }; 
};

addFavoriteBook("The Great Gatsby");
addFavoriteBook("The Fellowship of the Ring");
addFavoriteBook("Great Expectations");
addFavoriteBook("The Two Towers");
addFavoriteBook("The Return of the King");
addFavoriteBook("The Hobbit");

function printFavoriteBook() {
    for (book of favoriteBooks) {
        console.log(book);
    };
    console.log(`${favoriteBooks.length} books total.`);
};

printFavoriteBook();