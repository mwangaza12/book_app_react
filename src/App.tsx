import { useEffect, useState } from 'react'
import './App.css'
import { BookComponent } from './components/BookComponent'
import type { Book } from './types/types'

const getBooks = async () => {
  const res = await fetch('https://book-api-wrba.onrender.com/api/books');
  const books = await res.json();
  return books;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  console.log(books)

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []); 

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookComponent key={book.bookId} book={book} />
        ))}
      </div>
    </div>

  );
}

export default App;
