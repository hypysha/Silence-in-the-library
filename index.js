let library = [];

// структ данных книги
class Book {
  constructor(title, author, year, genre, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
  }
}

// + книг в библиотеку
function addBook(title, author, year, genre, pages) {
  let book = new Book(title, author, year, genre, pages);
  library.push(book);
}

// - книги из библиотеки по названию
function removeBook(title) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title === title) {
      library.splice(i, 1);
      break;
    }
  }
}

// поиск по автору
function findBooksByAuthor(author) {
  let books = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].author === author) {
      books.push(library[i]);
    }
  }
  return books;
}

// фильтрация по жанру
function filterBooksByGenre(genre) {
  let books = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].genre === genre) {
      books.push(library[i]);
    }
  }
  return books;
}

// генерация отчета по кол-ву книг каждого жанра
function genreReport() {
  let report = {};
  for (let i = 0; i < library.length; i++) {
    if (library[i].genre in report) {
      report[library[i].genre]++;
    } else {
      report[library[i].genre] = 1;
    }
  }
  return report;
}

// генерация отчета по ср кол-ву страниц
function averagePagesReport() {
  let total = 0;
  for (let i = 0; i < library.length; i++) {
    total += library[i].pages;
  }
  let average = total / library.length;
  return average;
}

// сортировка по году издания
function sortByYear() {
  library.sort((a, b) => b.year - a.year);
}

// + книг в библиотеку
addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

// поиск по автору
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));

// фильтрация по жанру
console.log(filterBooksByGenre("Фэнтези"));

// генерация отчета по кол-ву книг каждого жанра
console.log(genreReport());

// генерация отчета по ср кол-ву страниц
console.log(`Среднее количество страниц: ${averagePagesReport()}`);

// сортировка по году издания
sortByYear();
console.log(library);