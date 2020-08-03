import React from "react";
import SavedBooks from "./SavedBooks";

const SavedList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <SavedBooks
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

export default SavedList;
