import React from "react";
import '../App.css';


const BookCard = (props) => {
  return (
<>
<div className="card-container">
<img src={props.image} alt="Book Cover" />
<div className="card-body">
<h2 className="card-title">{props.title}</h2>
<h3>Author: {props.author}</h3>
<p className="card-text"><strong>Synopsis:</strong> {props.description}</p>
<button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.link}>
View Book</a></button>
<button className="btn" id="save-button" onClick={props.handleSavedButton}>Save Book</button>
</div>
</div>
</>
  );
};

export default BookCard;
