import React, {useState} from "react";
import axios from "axios";
import {Results, ResultsListItem} from "./Results";
import { Row, Col, Container } from "./Grid";

const Search = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChage = (e) => {
        const {value}  = e.target;
        //console.log("value: ", value.toLowerCase().replace(/\s/g, '%'));
        setSearch(value.toLowerCase().replace(/\s/g, '%'));
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = "https://www.googleapis.com/books/v1/volumes?q=" + search;
        console.log(query);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
        .then(res =>{
            setResults(res.data.items);
        }).catch(err => console.log(err));
    }

    console.log("results: ", results); 

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
                {results.map(result => {
                  return (
                    <ResultsListItem
                    key = {result.id}
                    title = {result.volumeInfo.title}
                    thumbnail = {result.volumeInfo.imageLinks.thumbnail}
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

