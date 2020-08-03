import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard 
            key={i}
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks.thumbnail}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
        
          />
          
        );
      })}
    </div>
  );
  
};

export default BookList;
