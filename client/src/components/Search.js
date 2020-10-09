import React, { useState } from "react";
import axios from "axios";
import { Results, ResultsListItem } from "./Results";
import { Row, Col, Container } from "./Grid";
import API from "../utils/API";

const Search = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChage = (e) => {
        const { value } = e.target;
        setSearch(value.toLowerCase().replace(/\s/g, '%'));
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
            .then(res => {
                console.log("res" , res.data.items);
                setResults( res.data.items.map((data) => {
                    return {
                    key_id: data.id,
                    title: data.volumeInfo.title,
                    authors: data.volumeInfo.authors,
                    description: data.volumeInfo.description,
                    image: data.volumeInfo.imageLinks.thumbnail,
                    link: data.volumeInfo.infoLink
                    }
                }))
            }).catch(err => 
                {
                    console.log(err);
                alert("Please enter a valid book name.");
            })
            }

    const saveBook = (e) => {
        e.preventDefault();
        console.dir(e.target)
        const id = e.target.getAttribute("index");
        console.log("save book:" + id);
        const bookData = results.filter(result => id === result.key_id);
        console.log("books",bookData)
        API.saveBook(bookData)
        .then((res) => {
        alert("Book Saved Successfully!!")})
        .catch(err => console.log(err)) 
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit} className="jumbotron form-group">
                <center>
                    <h1 className="display-4">Google Books Search</h1>
                    <hr className="my-4"></hr>
                    <div className="input-group mb-3">
                        <input onChange={handleInputChage} type="text" className="form-control" placeholder="Enter a book name" aria-label="Enter a book name" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button onClick={handleSearchSubmit} className="btn btn-outline-secondary" type="button">Submit</button>
                        </div>
                    </div>
                    <br></br>
                </center>
            </form>
            <Container>
                <Row>
                    <Col size="xs-12">
                        <Results>
                            {results.map((result) => {
                                return (
                                    <ResultsListItem
                                        key_id={result.key_id}
                                        key={result.key_id}
                                        title={result.title}
                                        authors={result.authors}
                                        description={result.description}
                                        image={result.image}
                                        link={result.link}
                                        saveBook={saveBook}
                                        buttonText="Save"
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

export default Search;

