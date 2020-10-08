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
          console.log("response: " , res);
            setBooks(res.data)})
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
                            {/* {results.map((result) => {
                                return (
                                    <ResultsListItem
                                        key_id={result.id}
                                        key={result.id}
                                        title={result.volumeInfo.title}
                                        authors={result.volumeInfo.authors}
                                        description={result.volumeInfo.description}
                                        image={result.volumeInfo.imageLinks.thumbnail}
                                        link={result.volumeInfo.infoLink}
                                        saveBook={saveBook}
                                        buttonText="Delete"
                                    />
                                )
                            })} */}
                        </Results>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Saved;