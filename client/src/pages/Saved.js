import React from "react";
import API from "../utils/API"
import SavedList from "../components/SavedList";

//could not get this to connect with my get books api route
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
               <SavedList books={this.state.books}/>
            </div>
        )
    }
}

export default Saved
