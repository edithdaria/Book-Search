import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row, Col } from "./Grid";

export function Results({ children }) {
    // console.log("children", children);
    return (
        <ul className="list-group">{children}</ul>
    )

}


export function ResultsListItem(props) {
    console.log("props: ", props);
    return (
        <li className="list-group-item">
            <Container >
            <Row>
                <button key={props.key_id} index={props.key_id} onClick={props.saveBook} type="button" className="btn btn-dark pull-right">{props.buttonText}</button>
            </Row>
            <br/>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h4>{props.title}</h4>
                        <p><strong>Authors: </strong>{props.authors}</p>
                        <p><strong>Description: </strong> {props.description}
                        </p>
                        <a rel="noreferrer noopener"
                            target="_blank"
                            href={props.link}>
                            More Info...</a>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}
