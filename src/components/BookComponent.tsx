import type { BookProps } from "../types/types";

export const BookComponent = ({ book }: BookProps) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        <p className="book-meta">
          {book.year} · {book.genre}
        </p>
      </div>
    </div>
  );
};
