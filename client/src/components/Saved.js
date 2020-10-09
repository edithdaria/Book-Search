import React, { useEffect, useState } from "react";
import { Results, ResultsListItem } from "./Results";
import { Row, Col, Container } from "./Grid";
import API from "../utils/API";


const Saved = () => {

      // Initialize books as an empty array
      const [books, setBooks] = useState([]);
  
      useEffect(() => {
        loadBooks();
      }, []);
  
      function loadBooks() {
        // Add code here to get all books from the database and store them using setBooks
        API.getBooks()
        .then((res) => {
          console.log("response: " , res.data);
            setBooks(res.data)})
        .catch(err => console.log(err))
  
      }

      function deleteBook(e){
          e.preventDefault();
          const id = e.target.getAttribute("id");
          console.log("delete book:" + id);
          API.deleteBook(id)
          .then((res) => {
              console.log(res);
            loadBooks()
          alert("Book Deleted Successfully!!")})
          .catch(err => console.log(err)) 
      }


    return (
        <div class="jumbotron">
            <center>
                <h1 class="display-4">Saved Search Results</h1>
                <hr class="my-4" />
            </center>
            <Container>
                <Row>
                    <Col size="xs-12">
                        <Results>
                            {books.map((book) => {
                                return (
                                    <ResultsListItem
                                        key_id={book.key_id}
                                        key={book.key_id}
                                        title={book.title}
                                        authors={book.authors}
                                        description={book.description}
                                        image={book.image}
                                        link={book.link}
                                        id={book._id}
                                        saveBook={deleteBook}
                                        buttonText="Delete"
                                    />
                                )
                            })}
                        </Results>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Saved;