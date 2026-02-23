import React from 'react';

const Book = ({book}) => {
    console.log(book)
    return (
        <div>
            
            <h3>{book.name}</h3>
        </div>
    );
};

export default Book;