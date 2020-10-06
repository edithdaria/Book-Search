import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row, Col } from "./Grid";

export function Results({ children }) {
    console.log("children", children);
    return (
        <ul className="list-group">{children}</ul>
    )

}

export function ResultsListItem(props) {
    console.log("props: ", props);
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{props.title}</h3>
                        <p>
                            Ingredients: {props.ingredients}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href={props.href}
                        >
                            Go to recipe!
              </a>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}