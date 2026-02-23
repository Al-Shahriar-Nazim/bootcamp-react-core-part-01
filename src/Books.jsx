import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  console.log(books);
  return (
    <div>
      <h3>Boooks section </h3>
      {
        books.map(book =><Book key={book.id} book={book}></Book>)
      }
    </div>
  );
};

export default Books;
