export type Book = {
  bookId: number;
  title: string;
  author: string;
  year: number;
  genre: string;
};

export type BookProps = {
  book: Book;
};