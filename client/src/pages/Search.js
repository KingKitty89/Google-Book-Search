import React, { useState } from "react";
import Textfield from "../components/TextField";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../components/MediaCard";
import { GridList, Button, Container, Box, Typography } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    gridList: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "#03a9f4",
        color: "white"
    }
}));

function Search() {
    const classes = useStyles();

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
  

    const searchBooks = () => {
        API.search(searchTerm)
            .then(response => {
                setBooks(response.data);
            })
            .catch(() => {
                setBooks([]);
                
            });
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    const makeBook = (bookData) => {
        API.makeBook({
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks,
            link: bookData.volumeInfo.infoLink
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <Container>

            <Textfield handleInputChange={handleInputChange} name="title" searchTerm={searchTerm} />
            <Box className={classes.box}>
                <Button className={classes.button} variant="contained" onClick={searchBooks}>
                    Search
                </Button>
            </Box>
            {books.length ? (
                <GridList className={classes.gridList} cols={3}>
                    {books.map((book, i) => (
                        <MediaCard
                            key={i}
                            image={book.volumeInfo.imageLinks}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors.join(', ')}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            action={() => {
                                makeBook(book);
                            }}
                            btnContent={'Save Book'}
                        />
                    ))}
                </GridList>
            ) : (
                <Typography variant="h3" className={classes.box}>
                </Typography>
            )}
        </Container>
    );
}

export default Search;