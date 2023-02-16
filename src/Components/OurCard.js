import React from "react";
import { Card, Col } from "react-bootstrap";

const OurCard = (props) => {
    const { imageItem } = props;
    return (
        <Col>
            <div>
                <Card>
                    <Card.Img variant="top" src={`${imageItem.urls.thumb}`} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};
export default OurCard;