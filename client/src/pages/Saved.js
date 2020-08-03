import React from "react";
import API from "../utils/API"
import BookList from "../components/BookList";

class Saved extends React.Component {
    state = {
        saved: [],
    
    }
    componentDidMount() {
       this.getSaved()
    }
    getSaved = () => {
        API.getBooks()
           .then(res => {
               this.setState({saved: res.data})
           })
    }
    render() {
        return (
            <div>
               <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default Saved
